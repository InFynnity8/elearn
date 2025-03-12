import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { BellRing, EllipsisVertical, Heart } from "lucide-react";
import toy from "../assets/profile.png";
import bgcover from "../assets/elearn.jpg";
import t1 from "../assets/teach.png";
import t2 from "../assets/thumbchem5.webp";
import t3 from "../assets/thumbnail6.png";
import t4 from "../assets/thumnail.jpg";
import t5 from "../assets/thumnailmath.webp";
import t6 from "../assets/thumnail2.webp";
import t7 from "../assets/elearn.jpg";
import t8 from "../assets/thumbnail9.png";
import t9 from "../assets/bg2.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const eSubjects = [
  {
    name: "BIOLOGY",
    title: "",
    thumbnail: ""
  },
  {
    name: "PHYSICS",
    title: ""
  },
  {
    name: "E-MATHEMATICS",
    title: ""
  },
  {
    name: "CHEMISTRY",
    title: ""
  }
]
const cSubjects = [
  
  {
    name: "ENGLISH",
    title: ""
  },
  {
    name: "SOCIAL STUDIES",
    title: ""
  },
  {
    name: "INTEGRATED SCIENCE",
    title: ""
  },
  {
    name: "CORE MATHEMATICS",
    title: ""
  }
]


const Dashboard = () => {
  const courses = useSelector((state: any) => state.courses); 
  return (
    <div className=" p-4">
      {/* cover */}
      <div className="relative w-full rounded-[15px] bg-blue-400 p-5 flex justify-between overflow-hidden">
        <div className="w-[50%]  flex flex-col justify-between h-full text-white">
          <p className="text-[11px]">GES COURSES</p>
          <h1 className="leading-7.5 text-[30px] font-medium my-5">
            Enhance Your Knowledge with Comprehensive Senior High School Courses
          </h1>
          <Link to="/quiz">
            <Button className=" w-30 bg-black hover:bg-black hover:cursor-pointer">
              Take a Quiz
            </Button>
          </Link>
        </div>
        {/* image */}
        <div className="mt-5 h-40 w-90 flex items-center justify-center">
          <img src={t1} alt="" width={350} className="bg-cover object-cover" />
        </div>
      </div>

      {/* progress */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 my-4 w-full  items-center justify-between">
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

      {/* Lessons */}
      <div className="py-4">
      <div className="w-full flex justify-between items-center">
          <h1 className="font-medium py-4">Lessons</h1>
          <Link to="/lessons" className="text-blue-400 text-[18px]">...more</Link>
        </div>
        {/*Lessons */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
          {eSubjects.map( (subject, index) =>
            <Card className="h-[300px] p-2 flex-1" key={index}>
              <CardHeader className="p-0">
                <div
                  style={{
                    backgroundImage: `url(${t2})`,
                    backgroundSize: "cover",
                    objectFit: "contain",
                  }}
                  className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
                />
              </CardHeader>
              <CardDescription className="p-0 m-0">
                <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                  {subject.name}
                </p>
                <p className="text-muted-foreground font-medium text-[14px]">
                  Introduction to Human Anatomy and Physiology
                </p>
              </CardDescription>
              <CardFooter className="m-0 p-0 flex justify-end">
                <Link className="w-full" to="/player">
                <Button className="w-full">Start Course</Button>
                </Link>
              </CardFooter>
            </Card>)}
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-medium py-4">TextBooks</h1>
          <Link to="/textbooks" className="text-blue-400 text-[18px]">...more</Link>
        </div>
        {/*TextBooks*/}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
        {cSubjects.map( (subject, index) =>
            <Card className="h-[300px] p-2 flex-1" key={index}>
              <CardHeader className="p-0">
                <div
                  style={{
                    backgroundImage: `url(${t7})`,
                    backgroundSize: "cover",
                    objectFit: "contain",
                  }}
                  className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
                />
              </CardHeader>
              <CardDescription className="p-0 m-0">
                <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                  {subject.name}
                </p>
                <p className="text-muted-foreground font-medium text-[14px]">
                  Aki Ola
                </p>
              </CardDescription>
              <CardFooter className="m-0 p-0 flex justify-end">
                <Link className="w-full" to="/player">
                <Button className="w-full">Start Reading</Button>
                </Link>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
