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
import t7 from "../../assets/elearn.jpg";
import t8 from "../../assets/thumbnail9.png";
import t9 from "../../assets/bg2.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import biologyCover from "../../assets/bookcover/biology_textbook.png";
import chemistryCover from "../../assets/bookcover/chemistry.jpg";
import mathCover from "../../assets/bookcover/maths.png.jpg";
import physicsCover from "../../assets/bookcover/physics1.jpg";
import physics2Cover from "../../assets/bookcover/physics.jpg";

const eSubjects = [
  {
    name: "BIOLOGY",
    title: "",
    thumbnail: biologyCover,
  },
  {
    name: "PHYSICS",
    title: "",
    thumbnail: physics2Cover,
  },
  {
    name: "E-MATHEMATICS",
    title: "",
    thumbnail: chemistryCover,
  },
  {
    name: "CHEMISTRY",
    title: "",
    thumbnail: mathCover,
  },
  {
    name: "GEOGRAPHY",
    title: "",
    thumbnail: physicsCover,
  },
  {
    name: "ICT",
    title: "",
    thumbnail: chemistryCover,
  },
  {
    name: "AGRICULTURE",
    title: "",
    thumbnail: mathCover,
  },
];

const cSubjects = [
  {
    name: "ENGLISH",
    title: "",
    thumbnail: mathCover,
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

const TextBooks = () => {
  return (
    <div className="">
      <h1 className="px-4 py-2 font-medium text-[20px] text-blue-400">
        TextBooks
      </h1>
      <div className="px-4 pb-4">
        <h1 className="font-medium pb-4">Elective Subjects</h1>
        {/* e courses */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
          {eSubjects.map((subject, index) => (
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
            </Card>
          ))}
        </div>
        <h1 className="font-medium py-4">Core Subjects</h1>
        {/*core courses */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-4">
          {cSubjects.map((subject, index) => (
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBooks;
