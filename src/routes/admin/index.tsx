import { authGuard} from "@/lib/tanstack/query/use-viewer";
import { createFileRoute, Link} from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: AdminPage,
  async beforeLoad(ctx) {
    await authGuard({ ctx,  });
  },
});

interface AdminPageProps {
}

export function AdminPage({}: AdminPageProps) {
  return (
    <div className="w-full h-full  min-h-screen flex justify-center items-center">
      <h1 className="text-3xl">Admin</h1>
      <Link to="/auth" search={{ returnTo: "/admin" }}>Auth</Link>
    </div>
  );
}
