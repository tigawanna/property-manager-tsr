import { authGuard } from "@/lib/tanstack/query/use-viewer";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BillsPage } from "./-components/BillsPage";
import { getDefaultPeriod } from "./-components/api/use-bills-period";

const { curr_month, curr_year, prev_month, prev_year } = getDefaultPeriod();

const searchparams = z.object({
  cy: z.number().default(curr_year).optional(),
  cm: z.number().default(curr_month).optional(),
  py: z.number().default(prev_year).optional(),
  pm: z.number().default(prev_month).optional(),
  bill: z.number().default(0).optional(),
});
export const Route = createFileRoute("/admin/bills/")({
  component: BillsPage,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});
