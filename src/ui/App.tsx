import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SidebarLeft } from "../components/sidebar-left"
import { SidebarRight } from "../components/sidebar-right"
import { Location } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../components/ui/breadcrumb"
import { Separator } from "../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar"
import { NavUser } from '../components/nav-user'

import {
  formatDate,
} from "date-fns";

const Month = formatDate(Date(), "MMMM");
const Day = formatDate(Date(), "do");
const time =  new Date()
const year = time.getFullYear();
const fulldate = Day + " "  + Month + ", "  + year.toString() 
const data = {
  user: {
    name: "Hello, Marvin",
    email: fulldate,
    avatar: "/avatars/shadcn.jpg",
  }, 
};

function App() {
  const location = useLocation()

  return (
    <> 
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset className='bg-accent w-full'>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 bg-background z-50">
          <div className="flex flex-1 items-center gap-2 px-3 justify-between">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 capitalize">
                    {/* {location.pathname.replace("/", "")} */}
                     <NavUser user={data.user} />
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet />
        </div>
      </SidebarInset>
      {/* <SidebarRight /> */}
    </SidebarProvider>
    </>
  )
}

export default App
