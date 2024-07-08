import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'
import { BillsPage } from './-components/bills/BillsPage';
import { z } from 'zod';

const searchparams = z.object({
  cy: z.number().optional(),
  cm: z.number().optional(),
  py: z.number().optional(),
  pm: z.number().optional(),
});

export const Route = createFileRoute("/admin/bills")({
  validateSearch: (search) => searchparams.parse(search),
  component: BillsPage,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
