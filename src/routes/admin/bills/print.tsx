import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
import PrintBillsContainerBills from './-components/print/PrintBillsContainer';
const searchparams = z.object({
  cy: z.number().optional(),
  cm: z.number().optional(),
  py: z.number().optional(),
  pm: z.number().optional(),
});
export const Route = createFileRoute("/admin/bills/print")({
  component: PrintBillsContainerBills,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
