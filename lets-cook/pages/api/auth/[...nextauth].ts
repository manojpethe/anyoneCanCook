import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Postgres from "@/db/pgdb";

type User = {
  id: string;
  name: string;
  emailid: string;
  image: string;
};

const recordLoginActivity = async (user: User): Promise<boolean> => {
  const client = new Postgres();
  const sqlCheckUserRegistered = `select * from users where email = '${user.emailid}'`;
  const result = await client.query(sqlCheckUserRegistered);
  if (result?.rows.length === 0) {
    const client = new Postgres();
    const sqlAddNewUser = `insert into users(name,email,admin,active,last_login)
     values('${user.name}','${user.emailid}',false,true,CURRENT_DATE)`;
    client.query(sqlAddNewUser);
  } else if (result?.rows.length === 1) {
    const client = new Postgres();
    const sqlUpdateLastLogin = `update users set
    last_login = CURRENT_DATE
    where email = '${user.emailid}'`;
    client.query(sqlUpdateLastLogin);
  }
  const decisionToAllowUser = true
  return decisionToAllowUser;
};

const googleClientId: string = process.env.GOOGLE_CLIENT_ID || "";
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET || "";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile, email, credentials }) {
      // This callback is triggered after a successful sign-in
      // You can perform additional actions here, like logging the sign-in
      const name = user.name ?? "";
      const emailid = user.email ?? "";
      const image = user.image ?? "";
      const result = await recordLoginActivity({ id: user.id, name, emailid, image });
      return result;
    },
  },
};

export default NextAuth(authOptions);
