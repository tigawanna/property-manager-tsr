import { pb } from "@/lib/pb/client";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
export const viewerqueryOptions = queryOptions({
  queryKey: ["viewer"],
  queryFn: () => pb.from("property_user").authRefresh(),
  staleTime: 1000 * 60 * 60,
});
export function useViewer() {
  return useSuspenseQuery(viewerqueryOptions);
}
