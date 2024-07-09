import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
const searchparams = z.object({
  cy: z.number().optional(),
  cm: z.number().optional(),
  py: z.number().optional(),
  pm: z.number().optional(),
});
export const Route = createFileRoute("/admin/bills/print")({
  component: () => <div>Hello /admin/bills/print!</div>,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
