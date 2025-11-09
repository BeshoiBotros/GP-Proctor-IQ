import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronUp,
  SunMoon,
  Newspaper,
  Shield,
  ShieldPlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Exams",
    url: "/teacher/exams",
    icon: Newspaper,
  },
  {
    title: "Students",
    url: "/teacher/students",
    icon: Users,
  },
  {
    title: "Proctoring",
    url: "/teacher/proctoring",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "/teacher/settings",
    icon: Settings,
  },
];

export function TeacherSidebar() {
  const location = useLocation();
  const { setTheme } = useTheme();

  const pathname = location.pathname;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel className="text-2xl mt-2">
              <span className="flex gap-1"><ShieldPlus className="size-6 text-primary-base mt-1" /> Proctor-IQ</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="mt-5">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="flex flex-col justify-between items-center"
                  >
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <NavLink to={item.url}>
                        <item.icon size={"15px"} />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarHeader>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <SunMoon /> Theme
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <span>Light</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export function TeacherLayout() {
  return (
    <SidebarProvider>
      <TeacherSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
