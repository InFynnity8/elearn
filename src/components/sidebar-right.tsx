import * as React from "react";
import Profile from "./profile";
import { DatePicker } from "./date-picker";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "./ui/sidebar";
import {
  formatDate,
} from "date-fns";

const Month = formatDate(Date(), "MMMM");
const Day = formatDate(Date(), "do");
const dateTime = formatDate(Date(), "PPPppp")
const Time = formatDate(Date(), "p")
const time =  new Date()
const year = time.getFullYear();
const fulldate = Day + " "  + Month + ", "  + year.toString() + " " + Time
// This is sample data.

const user  = window.electronAPI.getAuthenticatedUser()

const data = {
  user: {
    name: user,
    email: fulldate,
    avatar: "/avatars/shadcn.jpg",
  }, 
};

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <Profile/>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SidebarSeparator className="mx-0" />
        <DatePicker />
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarFooter>
    </Sidebar>
  );
}
