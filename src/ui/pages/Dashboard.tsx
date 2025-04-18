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
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import biologyCover from "../assets/bookcover/biology_textbook.png";
import chemistryCover from "../assets/bookcover/chemistry.jpg";
import mathCover from "../assets/bookcover/maths.png.jpg";
import physicsCover from "../assets/bookcover/physics1.jpg";
import physics2Cover from "../assets/bookcover/physics.jpg";

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
    title: "",
    thumbnail: physics2Cover,
  },
  {
    name: "SOCIAL STUDIES",
    title: "",
    thumbnail: chemistryCover,
  },
  {
    name: "INTEGRATED SCIENCE",
    title: "",
    thumbnail: biologyCover,
  },
  {
    name: "CORE MATHEMATICS",
    title: "",
    thumbnail: mathCover,
  },
];


const Dashboard = () => {
  // const courses = useSelector((state: any) => state.courses); 
  const {course} = useParams()
  return ( 
    <div className=" p-4">
      {/* cover */}
      <div className="relative w-full rounded-[15px] bg-blue-400 p-5 flex justify-between overflow-hidden">
        <div className="w-[50%]  flex flex-col justify-between h-full text-white">
          <p className="text-[11px]">{course}</p>
          <h1 className="leading-5 text-[20px] lg:leading-6 lg:text-[25px] xl:leading-7.5 xl:text-[30px] font-medium my-5">
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
          <Link to="/lessons" className="text-blue-400 text-[18px]">view all...</Link>
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
                <Link className="w-full" to={`/player/${subject.name}`}>
                <Button className="w-full">Start Course</Button>
                </Link>
              </CardFooter>
            </Card>)}
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-medium py-4">TextBooks</h1>
          <Link to="/textbooks" className="text-blue-400 text-[18px]">view all...</Link>
        </div>
        {/*TextBooks*/}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
        {cSubjects.map( (subject, index) =>
            <Card
                          className="h-[300px] pt-7 flex-1 flex flex-col items-center"
                          key={index}
                        >
                          <div className="h-full overflow-hidden">
                            <img
                              src={subject.thumbnail}
                              alt="cover"
                              width={150}
                              height={150}
                            />
                          </div>
                          <CardFooter className="w-full m-0 px-7 flex justify-end">
                            <Link className="w-full" to={`/reader/${subject.name}`}>
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
