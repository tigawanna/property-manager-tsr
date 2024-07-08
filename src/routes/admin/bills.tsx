import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'
import { BillsPage } from './-components/bills/BillsPage';

export const Route = createFileRoute("/admin/bills")({
  component:BillsPage,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
