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

function App() {
  const location = useLocation()

  return (
    <> 
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset className='bg-accent'>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 capitalize">
                    {location.pathname.replace("/", "")}
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
      <SidebarRight />
    </SidebarProvider>
    </>
  )
}

export default App
