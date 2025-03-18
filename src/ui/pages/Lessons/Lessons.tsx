import React, { useEffect } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import toy from "../../assets/profile.png";
import bgcover from "../../assets/elearn.jpg";
import t1 from "../../assets/teach.png";
import t2 from "../../assets/thumbchem5.webp";
import t3 from "../../assets/thumbnail6.png";
import t4 from "../../assets/thumnail.jpg";
import t5 from "../../assets/thumnailmath.webp";
import t6 from "../../assets/thumnail2.webp";
import t7 from "../assets/elearn.jpg";
import t8 from "../../assets/thumbnail9.png";
import t9 from "../../assets/bg2.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const eSubjects = [
  {
    name: "BIOLOGY",
    title: "",
    thumbnail: "",
  },
  {
    name: "PHYSICS",
    title: "",
  },
  {
    name: "E-MATHEMATICS",
    title: "",
  },
  {
    name: "CHEMISTRY",
    title: "",
  },
  {
    name: "GEOGRAPHY",
    title: "",
  },
  {
    name: "ICT",
    title: "",
  },
  {
    name: "AGRICULTURE",
    title: "",
  },
];
const cSubjects = [
  {
    name: "ENGLISH",
    title: "",
  },
  {
    name: "SOCIAL STUDIES",
    title: "",
  },
  {
    name: "INTEGRATED SCIENCE",
    title: "",
  },
  {
    name: "CORE MATHEMATICS",
    title: "",
  },
];

const Lessons = () => {
  return (
    <div className="">
      <h1 className="px-4 py-2 font-medium text-[20px] text-blue-400">Lessons</h1>
      <div className="px-4 pb-4">
        <h1 className="font-medium pb-4">Elective Subjects</h1>
        {/* e courses */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
          {eSubjects.map((subject, index) => (
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
            </Card>
          ))}
        </div>
        <h1 className="font-medium py-4">Core Subjects</h1>
        {/*core courses */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
          {cSubjects.map((subject, index) => (
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
