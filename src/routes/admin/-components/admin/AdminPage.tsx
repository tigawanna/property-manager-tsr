import { Link } from "@tanstack/react-router";
import { Droplet, Store, Users, Wallet, Zap } from "lucide-react";

interface AdminPageProps {}

export function AdminPage({}: AdminPageProps) {
    const links = [
      {
        name: "bills",
        path: "/admin/bills",
        icon: (
          <div className="flex">
            <Droplet />
            <Zap />
          </div>
        ),
      },
      { name: "shops", path: "/admin/shops", icon: <Store /> },
      { name: "tenants", path: "/admin/tenants", icon: <Users /> },
      { name: "rent", path: "/admin/rent", icon: <Wallet /> },
    ] as const
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full flex justify-center items-center"></div>
      <ul className="w-full h-full flex flex-wrap justify-center items-center gap-2 p-[5%]">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="p-[5%] flex gap-2 justify-center items-center 
          text-4xl h-full w-[40%] bg-bg-subtle rounded-lg
          hover:bg-bg-emphasized hover:text-accent-text">
            {link.icon}
            {link.name}
          </Link>
        ))}

      </ul>
    </div>
  );
}
