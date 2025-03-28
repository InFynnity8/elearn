"use client";

import * as React from "react";
import {
  BrainCircuit,
  GraduationCap,
  BrainCog,
  BookText,
  Home,
  NotebookPen
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "./ui/sidebar";
// import { useSelector } from "react-redux"
// import { ReactState } from "../ui/state/store"
// import { useState } from "react"

// This is sample data.
// const data = {
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/",
//       icon: Home,
//       isActive: true,
//     },
//     {
//       title: "Lessons",
//       url: "/lessons",
//       icon: GraduationCap ,
//     },
//     {
//       title: "TextBooks",
//       url: "/TextBooks",
//       icon: BookText,
//     },
//     {
//       title: "Notebook",
//       url: "/notebook",
//       icon: NotebookPen,
//       badge: "10",
//     },
//     {
//       title: "Quiz",
//       url: "/quiz",
//       icon: BrainCircuit,
//       badge: "10",
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "/settings",
//       icon: Settings,
//     },
//     {
//       title: "Logout",
//       url: "/signup",
//       icon: LogOut,
//     },
//   ],
// }

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  // const courses = useSelector( (state: ReactState) => state.courses)
  // const [activeCourse, setActiveCourse] = useState("")

  // for(let x in courses) {
  //   if (courses[x].isActive === true) {
  //     setActiveCourse(courses[x].name)
  //   }
  // }

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
        isActive: true,
      },
      {
        title: "Lessons",
        url: "/lessons",
        icon: GraduationCap,
      },
      {
        title: "TextBooks",
        url: "/TextBooks",
        icon: BookText,
      },
      {
        title: "Notebook",
        url: "/notebook",
        icon: NotebookPen,
        badge: "10",
      },
      {
        title: "Quiz",
        url: "/quiz",
        icon: BrainCircuit,
        badge: "10",
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenuButton asChild className="pointer-events-none mb-8">  
          <div className="flex items-center w-full">
            <BrainCog className="size-8 text-blue-400" />
            <div className="font-bold text-blue-400 w-full ml-5 text-2xl">
              eClassroom
            </div>
          </div>
        </SidebarMenuButton>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
