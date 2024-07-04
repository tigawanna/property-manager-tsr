import { HomeIcon, LayoutDashboard, UserCog } from "lucide-react";

export const navbarRoutes = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Auth",
    path: "/auth",
    icon: UserCog,
  }
] as const
