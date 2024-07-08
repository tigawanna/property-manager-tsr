import { authGuard} from "@/lib/tanstack/query/use-viewer";
import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "./-components/ProfilePage";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
  async beforeLoad(ctx) {
    await authGuard({ ctx })
  },
});

