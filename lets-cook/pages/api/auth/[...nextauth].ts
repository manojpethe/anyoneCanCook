import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const googleClientId:string = process.env.GOOGLE_CLIENT_ID || '';
const googleClientSecret:string = process.env.GOOGLE_CLIENT_SECRET || '';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);