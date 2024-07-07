import { authGuard } from "@/lib/tanstack/query/use-viewer";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SigninComponent } from "./-components/SigninComponent";
const searchparams = z.object({
  returnTo: z.string(),
});
export const Route = createFileRoute("/auth/")({
  component: SigninPage,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    await authGuard({ ctx, reverse: true });
  },
});

interface SigninPageProps {}

export function SigninPage({}: SigninPageProps) {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center"><SigninComponent/></div>
  );
}
