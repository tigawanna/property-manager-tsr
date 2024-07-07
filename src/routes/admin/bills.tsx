import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/admin/bills")({
  component: () => <div>Hello /admin/bills!</div>,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
