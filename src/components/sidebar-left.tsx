"use client"

import * as React from "react"
import {
  BrainCircuit,
  GraduationCap ,
  Calendar,
  BookText,
  Home,
  NotebookPen,
  MessageCircleQuestion,
  Search,
  Settings2,
  LogOut,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar"

// This is sample data.
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
      icon: GraduationCap ,
    },
    {
      title: "Homework",
      url: "/homework",
      icon: BookText,
    },
    {
      title: "Notes",
      url: "/notes",
      icon: NotebookPen,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Timetable", 
      url: "/timetable",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
    {
      title: "Logout",
      url: "/login",
      icon: LogOut,
    },
  ],
}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="w-full flex items-center justify-center mb-6 mt-2 pointer-events-none">
          <BrainCircuit className="size-8 text-blue-400" />
          <p className="text-2xl font-bold text-blue-400">eLearn</p>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
