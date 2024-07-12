import { authGuard } from "@/lib/tanstack/query/use-viewer";
import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "./-components/admin/AdminPage";



export const Route = createFileRoute("/admin/")({
  component: AdminPage,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});




