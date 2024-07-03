import { Link, useRouterState } from "@tanstack/react-router";
import Nprogress from "./navigation/nprogress/Nprogress";
import { MdCastle } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MainSideDrawer } from "./navigation/MainSideDrawer";
interface MainNavbarProps {}

export function MainNavbar({}: MainNavbarProps) {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return (
    <nav className="w-full flex flex-col items-center justify-center py-1 px-3 border-b">
      <div className="w-full flex justify-between">
        <Link to="/" className="">
          <MdCastle className="size-8" />
        </Link>
        <Link to="/admin" className="">admin</Link>
        <Link to="/auth">
          <FaCircleUser className="size-8"/>
        </Link>
        <MainSideDrawer/>
      </div>
      <Nprogress isAnimating={isLoading} />
    </nav>
  );
}
