import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

const esubs = [
  "physics",
  "biology",
  "chemistry",
  "emathematics"
];
const csubs = [
  "integrated Science",
  "core Mathematics",
  "english",
  "social Studies",
];

const Quiz = () => {
  return (
    <div className="p-4">
      <div className="pb-2 flex items-center justify-between">
        <h1 className="flex-4 font-medium text-[20px] text-blue-400">
          Quizzes
        </h1>
      </div>
      <div className="">
        <h1 className="font-medium mb-2">Elective Subjects</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-7">
          {esubs.map((sub, index) => (
            <Card className="p-2" key={index}>
              <CardHeader className="p-0 font-medium">
                <CardTitle className="capitalize">{sub}</CardTitle>
                <CardDescription>
                  A test based on A+ past questions
                </CardDescription>
              </CardHeader>
              <CardFooter className="w-full p-0">
                <Link to={`/quizlet/${sub}`} className="w-full">
                  <Button className="w-full">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <h1 className="font-medium mb-2">Core Subjects</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {csubs.map((sub, index) => (
            <Card className="p-2" key={index}>
              <CardHeader className="p-0 font-medium">
                <CardTitle className="capitalize">{sub}</CardTitle>
                <CardDescription>
                  A test based on A+ past questions
                </CardDescription>
              </CardHeader>
              <CardFooter className="w-full p-0">
                <Link to={`/quizlet/${sub}`} className="w-full">
                  <Button className="w-full">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
