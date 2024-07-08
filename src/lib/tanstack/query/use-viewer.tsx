import { pb, PocketBaseClient } from "@/lib/pb/client";
import { PropertyUserResponse } from "@/lib/pb/database";
import {
  QueryClient,
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { redirect } from "@tanstack/react-router";
import { BeforeLoadContext } from "node_modules/@tanstack/react-router/dist/esm/route";
import { RecordAuthResponse } from "pocketbase";
export const viewerqueryOptions = queryOptions({
  queryKey: ["viewer"],
  queryFn: () =>
    pb
      .from("property_user")
      .authRefresh()
      .then((res) => res)
      .catch(() => {
        // pb.authStore.clear();
        return { record: null };
      }),
  staleTime: 1000 * 60 * 60,
});
export function useViewer() {
  const qc = useQueryClient();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      pb.authStore.clear();
      qc.invalidateQueries(viewerqueryOptions);
    },
  });
  return { userQuery: useSuspenseQuery(viewerqueryOptions), logoutMutation };
}

interface AuthGuardProps {
  ctx: BeforeLoadContext<
    {},
    Record<never, string>,
    {
      pb: PocketBaseClient;
      queryClient: QueryClient;
      viewer?: RecordAuthResponse<PropertyUserResponse>;
    }
  >;
  role?: "staff" | "tenant" | "user";
  reverse?: boolean;
}
export async function authGuard({ ctx, role, reverse }: AuthGuardProps) {
  // @ts-expect-error
  const returnTo = ctx.search?.returnTo ?? "/";
  const user = ctx.context?.viewer;
  // console.log(" ============ user in ",ctx.location.pathname," guard =========== ", user);
  // console.log(" ============ user in ",ctx.location.pathname," guard =========== ", user?.record);

  if (!user?.record) {
    // console.log(" ++++++++ no user redirectiong to auth ++++++ ");
    throw redirect({
      to: "/auth",
      search: {
        returnTo: ctx.location.pathname,
      },
    });
  }
  // redirect beck if a user exists , to be used in auth routes
  if (reverse) {
    // console.log(" ++++++++ user exists in auth redirecting back ++++++ ");
    throw redirect({
      to: returnTo ?? "/",
    });
  }
  // redirect if not the right role
  if (role && user?.record?.role !== role) {
    // console.log(" ++++++++ user exists but wrong role redirecting back ++++++ ");
    throw redirect({
      to: returnTo ?? "/",
    });
  }
  // console.log(" ++++++++ fall through case user exists ++++++ ");
}
// export async function authGuard({ ctx, role, reverse }: AuthGuardProps) {
//   // @ts-expect-error
//   const returnTo = ctx.search?.returnTo ?? "/";
//   const pathName = ctx.location.pathname
//   try {
//     const user = ctx.context?.viewer
//     console.log(" ============ user in ",pathName," guard =========== ", user?.record);
//     // redirect to auth if no user is found
//     if (!user?.record) {
//       throw new Error("/auth");
//     }
//     // redirect beck if a suer exists , to be used in auth routes
//     if (reverse && user?.record) {
//       throw new Error(returnTo);
//     }
//     // redirect if not the right role
//     if (role && user?.record?.role !== role) {
//       throw new Error(returnTo);
//     }
//   } catch (error: any) {
//     console.log(" ============ error in auth guard =========== ", error.message);
//     const err_msg = error?.message as string;

//     if (err_msg.startsWith("/") || err_msg.startsWith("..")) {
//       if (err_msg.startsWith("/auth")) {
//         throw redirect({
//           to: "/auth",
//           search: {
//             returnTo: ctx.location.pathname,
//           },
//         });
//       }
//       throw redirect({
//         to: err_msg ?? "/",
//       });
//     }

//     throw redirect({
//       to: "/auth",
//       search: {
//         returnTo: ctx.location.pathname,
//       },
//     });
//   }
// }
