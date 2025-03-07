import React from "react";
import { Book, BrainCog, BriefcaseBusiness, CookingPot, GalleryVerticalEnd, Paintbrush, TestTube, TestTube2 } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";

const CourseSelect = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className="">
      <div
        className={cn(
          "flex flex-col gap-6 items-center  w-full h-[100vh] justify-center",
          className
        )}
        {...props}
      >
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <BrainCog className="size-20 text-blue-400" />
                </div>
                <span className="sr-only">eClassroom</span>
              </a>
              <h1 className="text-xl font-bold mb-10">Choose your preferred course</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-3 xl:grid-cols-5">
              <Card className="hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center"><TestTube2 size={50}/></CardContent>
                <CardFooter className="flex items-center justify-center">General Science</CardFooter>
              </Card>
              <Card className="hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center "><Book size={50}/> </CardContent>
                <CardFooter className="flex items-center justify-center">General Arts</CardFooter>
              </Card>
              <Card className="hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center "><BriefcaseBusiness size={50}/> </CardContent>
                <CardFooter className="flex items-center justify-center">Business</CardFooter>
              </Card>
              <Card className="hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center "> <CookingPot size={50}/> </CardContent>
                <CardFooter className="flex items-center justify-center">Home Economics</CardFooter>
              </Card>
              <Card className="hover:shadow-blue-400 hover:text-blue-400 transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center"> <Paintbrush size={50}/> </CardContent>
                <CardFooter className="flex items-center justify-center">Visual Arts</CardFooter>
              </Card>
              </div>
              <Link to="/">
                <Button type="submit" className="w-full hover:cursor-pointer">
                  Finish
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSelect;
