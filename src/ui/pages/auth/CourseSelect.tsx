import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateCourse } from "../../state/courseSlice.ts";
import {
  Book,
  BrainCog,
  BriefcaseBusiness,
  CookingPot,
  Paintbrush,
  TestTube2,
} from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";

const iconMap: any = {
  TestTube2: TestTube2,
  Book: Book,
  BriefcaseBusiness: BriefcaseBusiness,
  CookingPot: CookingPot,
  Paintbrush: Paintbrush,
};

const CourseSelect = () => {
  // const courses = useSelector((state: any) => Object.values(state.courses).filter(course => typeof course === "object"));
  const [courses, setCourses] = useState([
    { name: "General Science", icon: "TestTube2", isActive: false },
    { name: "General Arts", icon: "Book", isActive: false },
    { name: "Business", icon: "BriefcaseBusiness", isActive: false },
    { name: "Home Economics", icon: "CookingPot", isActive: false },
    { name: "Visual Arts", icon: "Paintbrush", isActive: false },
])
  const coursesArray = Object.values(courses);
  console.log(courses, coursesArray)
 

  const handleCourseClick = (selectedIndex: number) => {
    setCourses((prevCourses) =>
        prevCourses.map((course, index) => ({
            ...course,
            isActive: index === selectedIndex, // Activate only the selected course
        }))
    );
};

  return (
    <div className="px-4">
      <div className="flex flex-col gap-6 items-center  w-full h-[100vh] justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold mb-10">
              Choose your preferred course
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-2 md:grid-cols-4 xl:grid-cols-5">
              {courses.map((course, index) => {
                const IconComponent = iconMap[course.icon]; // Convert name back to component
                return (
                  <Card
                    key={index}
                    className={cn(
                      "hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer",
                      course.isActive ? "shadow-blue-400 text-blue-400 " : ""
                    )}
                    // onClick={() => dispatch(activateCourse(index))}
                    onClick={() => handleCourseClick(index)}
                  >
                    <CardContent className="flex items-center justify-center">
                      <IconComponent size={50} />
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                      {course.name}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="w-full flex items-center justify-end">
              <Link to="/">
                <Button type="submit" className="hover:cursor-pointer">
                  Finish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelect;
