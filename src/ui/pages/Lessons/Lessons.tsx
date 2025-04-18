import { Button } from "../../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import t1 from "../../assets/agri.jpg";
import t2 from "../../assets/thumbchem5.webp";
import t3 from "../../assets/social.jpg";
import t4 from "../../assets/thumnail.jpg";
import t5 from "../../assets/thumnailmath.webp";
import t6 from "../../assets/thumnail2.webp";
import t7 from "../../assets/geo.jpg";
import t8 from "../../assets/eng2.jpg";
import t9 from "../../assets/phy.jpg";
import t10 from "../../assets/interscience.png"; 
import t11 from "../../assets/coremaths.jpg";
import { Link } from "react-router-dom";

const eSubjects = [
  {
    name: "BIOLOGY",
    title: "Introduction to Human Anatomy and Physiology",
    thumbnail: t4,
  },
  {
    name: "PHYSICS",
    title: "Fundamentals of Motion, Force, and Energy",
    thumbnail: t9, 
  },
  {
    name: "E-MATHEMATICS",
    title: "Core Concepts in Algebra, Geometry, and Trigonometry",
    thumbnail: t5,
  },
  {
    name: "CHEMISTRY",
    title: "Basics of Matter, Elements, and Chemical Reactions",
    thumbnail: t2,
  },
  {
    name: "GEOGRAPHY",
    title: "Understanding Earth's Landscapes and Environments",
    thumbnail: t7,
  },
  {
    name: "ICT",
    title: "Foundations of Information and Communication Technology",
    thumbnail: t6,
  },
  {
    name: "AGRICULTURE",
    title: "Introduction to Agricultural Science and Practices",
    thumbnail: t1,
  },
];

const cSubjects = [
  {
    name: "ENGLISH",
    title: "",
    thumbnail: t8,
  },
  {
    name: "SOCIAL STUDIES",
    title: "",
    thumbnail: t3,
  },
  {
    name: "INTEGRATED SCIENCE",
    title: "",
    thumbnail: t10,
  },
  {
    name: "CORE MATHEMATICS",
    title: "",
    thumbnail: t11,
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
                    backgroundImage: `url(${subject.thumbnail})`,
                    backgroundSize: "cover",
                    objectFit: "contain",
                  }}
                  className="border-[1px] border-gray-100 flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
                />
              </CardHeader>
              <CardDescription className="p-0 m-0">
                <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                  {subject.name}
                </p>
                <p className="text-muted-foreground font-medium text-[14px]">
                  {subject.title}
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
                    backgroundImage: `url(${subject.thumbnail})`,
                    backgroundSize: "cover",
                    objectFit: "contain",
                  }}
                  className="border-[1px] border-gray-100 flex items-center justify-between bg-blue-400 rounded-[10px] h-32 w-full"
                />
              </CardHeader>
              <CardDescription className="p-0 m-0">
                <p className="text-[14px] text-blue-400 p-1 font-medium bg-muted w-fit pointer-events-none">
                  {subject.name}
                </p>
                <p className="text-muted-foreground font-medium text-[14px]">
                  {subject.title}
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
