import { LogOut, Settings } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";

export function NavSecondary({ ...props }) {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => { 
    window.electronAPI.logoutUser(); 
    localStorage.removeItem("user") 
    toast.success("Logged Out Successfully") 
    navigate("/signup");
  };

  const handleAddVideo = async () => {
    try {
      await window.electronAPI.openVideoFolder();
      toast.success("Video folder opened successfully");
    } catch (error) {
      toast.error("Failed to open video folder");
    }
  };

  const handleAddBook = async () => {
    try {
      await window.electronAPI.openPdfFolder();
      toast.success("PDF folder opened successfully");
    } catch (error) {
      toast.error("Failed to open PDF folder");
    }
  };

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <SidebarMenuButton asChild>
                <div className="">
                  <Settings />
                  <span>Settings</span>
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg p-2"
              side={isMobile ? "bottom" : "right"}
              align="start"
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-blue-400 text-[18px]">
                Settings
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Button onClick={handleAddVideo}>
                  Add Video
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <Button onClick={handleAddBook}>
                  Add Book
                </Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>something is here</DropdownMenuItem>
              <DropdownMenuItem>something is here</DropdownMenuItem>
              <DropdownMenuItem>something is here</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={handleLogout}>
              <div className="cursor-pointer w-full h-full">
                <LogOut className="text-red-500" />
                <span className="text-red-500">Logout</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
