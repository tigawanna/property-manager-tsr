import { Link, Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Auth } from "../utils/auth";
import { Spinner } from "../components/Spinner";
import { MainNavbar } from "@/components/MainNavbar";

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return <Spinner show={isLoading} />;
}

export const Route = createRootRouteWithContext<{
  auth: Auth;
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className={`min-h-screen flex flex-col`}>
        <MainNavbar/>
        <div className={`flex-1 flex`}>
          <div className={`flex-1 border-l border-gray-200`}>
            <Outlet />
          </div>
        </div>
      </div>
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
