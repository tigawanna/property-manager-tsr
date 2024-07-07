import { HomeIcon, LayoutDashboard } from "lucide-react";

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

] as const
