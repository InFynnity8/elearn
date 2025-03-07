import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "src/components/ui/card";
import { BellRing, EllipsisVertical } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="h-[900px]">
      {/* cover */}
      <div className="w-full rounded-[15px] bg-blue-400 h-52 p-5">
        <div className="w-[50%]  flex flex-col justify-between h-full text-white">
          <p className="text-[11px]">GES COURSES</p>
          <h1 className="leading-7 text-[24px] font-medium">
            Enhance Your Knowledge with Comprehensive Senior High School Courses
          </h1>
          <Button className="w-24">Start Now</Button>
        </div>
      </div>

      {/* progress */}
      <div className="grid gap-4 grid-cols-4 my-4 w-full h-10  items-center justify-between">
        {/* item */}
        <div className="flex items-center justify-between flex-1 bg-background shadow-md rounded-[10px] p-2">
          <div className="flex items-center justify-between">
            <button className="text-blue-400 mr-2 font-medium rounded-full bg-muted size-8 cursor-pointer flex items-center justify-center">
              <BellRing size={18} />
            </button>
            {/* details */}
            <div className="">
              <p className="text-muted-foreground text-[11px]">13/21 Watched</p>
              <p className="text-[14px] font-medium">Biology</p>
            </div>
          </div>
          <EllipsisVertical size={15} />
        </div>
        {/* item */}
        <div className="flex items-center justify-between flex-1 bg-background shadow-md rounded-[10px] p-2">
          <div className="flex items-center justify-between">
            <button className="text-blue-400 mr-2 font-medium rounded-full bg-muted size-8 cursor-pointer flex items-center justify-center">
              <BellRing size={18} />
            </button>
            {/* details */}
            <div className="">
              <p className="text-muted-foreground text-[11px]">6/11 Watched</p>
              <p className="text-[14px] font-medium">E-Mathematics</p>
            </div>
          </div>
          <EllipsisVertical size={15} />
        </div>
        {/* item */}
        <div className="flex items-center justify-between flex-1 bg-background shadow-md rounded-[10px] p-2">
          <div className="flex items-center justify-between">
            <button className="text-blue-400 mr-2 font-medium rounded-full bg-muted size-8 cursor-pointer flex items-center justify-center">
              <BellRing size={18} />
            </button>
            {/* details */}
            <div className="">
              <p className="text-muted-foreground text-[11px]">3/14 Watched</p>
              <p className="text-[14px] font-medium">Chemistry</p>
            </div>
          </div>
          <EllipsisVertical size={15} />
        </div>
        {/* item */}
        <div className="flex items-center justify-between flex-1 bg-background shadow-md rounded-[10px] p-2">
          <div className="flex items-center justify-between">
            <button className="text-blue-400 mr-2 font-medium rounded-full bg-muted size-8 cursor-pointer flex items-center justify-center">
              <BellRing size={18} />
            </button>
            {/* details */}
            <div className="">
              <p className="text-muted-foreground text-[11px]">9/10 Watched</p>
              <p className="text-[14px] font-medium">Physics</p>
            </div>
          </div>
          <EllipsisVertical size={15} />
        </div>
      </div>

      {/* Recently watched */}
      <div className="py-4">
        <h1 className="font-medium">Continue Watching</h1>
      </div>
    </div>
  );
};

export default Dashboard;
