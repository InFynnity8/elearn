"use client"

import * as React from "react"
import {
  BrainCircuit,
  GraduationCap ,
  BrainCog,
  BookText,
  Home,
  NotebookPen,
  LogOut,
  Settings,
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
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Logout",
      url: "/signup",
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
        <div className="w-full flex items-center justify-center mb-6 mt-2 pointer-events-none pr-4">
          <BrainCog className="size-8 text-blue-400" />
          <p className="text-2xl font-bold text-blue-400">eClassroom</p>
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
