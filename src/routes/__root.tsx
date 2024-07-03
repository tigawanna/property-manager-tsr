import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainNavbar } from "@/components/MainNavbar";
import { PocketBaseClient } from "@/lib/pb/client";



export const Route = createRootRouteWithContext<{
  pb: PocketBaseClient;
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
          <div className={`flex-1 border-l`}>
            <Outlet />
          </div>
        </div>
      </div>
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
