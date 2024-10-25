import React from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();
  const profileImage:string = session?.user?.image || '';

  return (
    <div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10">
      <div className="bg-gray-900 rounded-3xl h-screen">
        <header className="text-center mb-8 mt-8">
          <h1 className="text-5xl mb-1 ra">Your Profile</h1>
        </header>
        <div className="text-center content-center">
            <div className="text-xl">You are: {session?.user?.name}</div>
            <div className="text-xl">Your Email Address: {session?.user?.email}</div>
            <div className="grid place-items-center">
                <img className="m-20 rounded-full w-60 h-60" src={profileImage} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
