import React from "react";
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
import t1 from "../assets/man-cover.png";
import t2 from "../assets/thumbchem5.webp";
import t3 from "../assets/thumbnail6.png";
import t4 from "../assets/thumnail.jpg";
import t5 from "../assets/thumnailmath.webp";
import t6 from "../assets/thumnail2.webp";
import t7 from "../assets/elearn.jpg";
import t8 from "../assets/thumbnail9.png";
import t9 from "../assets/bg2.jpeg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-[900px]">
      {/* cover */}
      <div className="relative w-full rounded-[15px] bg-blue-400 p-5 flex justify-between">
        <div className="w-[50%]  flex flex-col justify-between h-full text-white">
          <p className="text-[11px]">GES COURSES</p>
          <h1 className="leading-9 text-[35px] font-medium mb-20">
            Enhance Your Knowledge with Comprehensive Senior High School Courses
          </h1>
        </div>
        {/* image */}
        <img
          src={t1}
          alt=""
          width={500}
          className="absolute right-0 -top-10 "
        />
      </div>

      {/* progress */}
      <div className="grid gap-4 grid-cols-4 my-4 w-full  items-center justify-between">
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
        <h1 className="font-medium py-4">Elective Subjects</h1>
        {/* e courses */}
        <div className="grid grid-cols-4 items-center justify-between gap-4">
          <Link to="/lessons">
            <Card className="h-[300px] p-2 flex-1">
              <CardHeader className="p-0">
                <div
                  style={{
                    backgroundImage: `url(${t4})`,
                    backgroundSize: "cover",
                    objectFit: "contain",
                  }}
                  className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
                />
              </CardHeader>
              <CardDescription className="p-0 m-0">
                <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                  BIOLOGY
                </p>
                <p className="text-muted-foreground font-medium text-[14px]">
                  Introduction to Human Anatomy and Physiology
                </p>
              </CardDescription>
              <CardFooter className="m-0 p-0 flex justify-end">
                {" "}
                <Heart className="cursor-pointer text-blue-400" />
              </CardFooter> 
            </Card>
          </Link>
          <Card className="h-[300px] p-2 flex-1">
            <CardHeader className="p-0">
              <div
                style={{
                  backgroundImage: `url(${t3})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
              />
            </CardHeader>
            <CardDescription className="p-0 m-0">
              <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                PHYSICS
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                Atomic physics | The dual nature of electron
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
          <Card className="h-[300px] p-2 flex-1">
            <CardHeader className="p-0">
              <div
                style={{
                  backgroundImage: `url(${t5})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
              />
            </CardHeader>
            <CardDescription className="p-0 m-0">
              <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                E-MATHEMATICS
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                Coordinate Geometry | Circle, lines and parabola
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
          <Card className="h-[300px] p-2 flex-1">
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
                CHEMISTRY
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                State of matter | Chemical Kinetics and the kinetic theory of
                Gases
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
        </div>
        <h1 className="font-medium py-4">Core Subjects</h1>
        {/*core courses */}
        <div className="grid grid-cols-4 items-center justify-between gap-4">
          <Card className="h-[300px] p-2 flex-1">
            <CardHeader className="p-0">
              <div
                style={{
                  backgroundImage: `url(${t6})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
              />
            </CardHeader>
            <CardDescription className="p-0 m-0">
              <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                SOCIAL STUDIES
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                State of matter | Chemical Kinetics and the kinetic theory of
                Gases
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
          <Card className="h-[300px] p-2 flex-1">
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
                ENGLISH
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                State of matter | Chemical Kinetics and the kinetic theory of
                Gases
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
          <Card className="h-[300px] p-2 flex-1">
            <CardHeader className="p-0">
              <div
                style={{
                  backgroundImage: `url(${t8})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
              />
            </CardHeader>
            <CardDescription className="p-0 m-0">
              <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                INTERGRATED SCIENCE
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                State of matter | Chemical Kinetics and the kinetic theory of
                Gases
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
          <Card className="h-[300px] p-2 flex-1">
            <CardHeader className="p-0">
              <div
                style={{
                  backgroundImage: `url(${t9})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                className="flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
              />
            </CardHeader>
            <CardDescription className="p-0 m-0">
              <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                CORE MATHEMATICS
              </p>
              <p className="text-muted-foreground font-medium text-[14px]">
                State of matter | Chemical Kinetics and the kinetic theory of
                Gases
              </p>
            </CardDescription>
            <CardFooter className="m-0 p-0 flex justify-end">
              {" "}
              <Heart className="cursor-pointer text-blue-400" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
