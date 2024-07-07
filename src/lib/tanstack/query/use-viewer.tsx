import { pb, PocketBaseClient } from "@/lib/pb/client";
import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { redirect } from "@tanstack/react-router";
import { BeforeLoadContext } from "node_modules/@tanstack/react-router/dist/esm/route";
export const viewerqueryOptions = queryOptions({
  queryKey: ["viewer"],
  queryFn: () => pb.from("property_user").authRefresh(),
  staleTime: 1000 * 60 * 60,
});
export function useViewer() {
  return useSuspenseQuery(viewerqueryOptions);
}

interface AuthGuardProps {
  ctx: BeforeLoadContext<
    {},
    Record<never, string>,
    {
      pb: PocketBaseClient;
      queryClient: QueryClient;
    }
  >;
  role?: "staff" | "tenant" | "user";
  reverse?: boolean;
}
export async function authGuard({ ctx, role, reverse }: AuthGuardProps) {
  // @ts-expect-error
  const returnTo = ctx.search?.returnTo ?? "/";
  try {
    const user = await ctx.context.queryClient.fetchQuery(viewerqueryOptions);
    // redirect to auth if no user is found
    if (!user?.record) {
      throw new Error("/auth");
    }
    // redirect beck if a suer exists , to be used in auth routes
    if (reverse && user?.record) {
      throw new Error(returnTo);
    }
    // redirect if not the right role
    if (role && user?.record?.role !== role) {
      throw new Error(returnTo);
    }
  } catch (error: any) {
    throw redirect({
      to: error?.message ?? "/",
      search: {
        returnTo: ctx.location.pathname,
      },
    });
  }
}
