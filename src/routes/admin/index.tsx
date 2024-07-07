import { authGuard } from "@/lib/tanstack/query/use-viewer";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: AdminPage,
  async beforeLoad(ctx) {
  const user = ctx.context.viewer
  console.log("user in admin guard ================ ",user)
  },
});

interface AdminPageProps {}

export function AdminPage({}: AdminPageProps) {
  return (
    <div className="w-full h-full  min-h-screen flex justify-center items-center">
      <h1 className="text-3xl">Admin</h1>
      <Link to="/auth" search={{ returnTo: "/admin" }}>
        Auth
      </Link>
    </div>
  );
}
