import React from "react";
import { UserRound, BellRing, Inbox,Flame  } from 'lucide-react';

const Profile = () => {
  return (
    <div className=" h-[900px] flex flex-col items-center justify-center px-10">
      {/* profile pic */}
      <div className="border-1 border-primary rounded-full overflow-hidden">
        <UserRound  size={70} className="text-black"/>
      </div>
      {/* user info */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-medium">Good Morning Marvin</h1>
        <p className="text-gray-500 text-[12px] text-center leading-3">Continue your journey and achieve your target</p>
      </div>
      {/* buttons */}
      <div className="w-[80%] h-20 flex items-center justify-between">
        <button className="text-black font-medium rounded-full border-[1px] border-gray-400 size-8 cursor-pointer flex items-center justify-center"> <BellRing size={18}/></button>
        <button className="text-black font-medium rounded-full border-[1px] border-gray-400 size-8 cursor-pointer flex items-center justify-center"><Inbox size={18}/></button>
        <button className="text-black font-medium rounded-full border-[1px] border-gray-400 size-8 cursor-pointer flex items-center justify-center"><Flame size={18}/></button>
      </div>
    </div>
  );
};

export default Profile;
