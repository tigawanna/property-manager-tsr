import { createFileRoute } from "@tanstack/react-router";
import { TenantsPage } from "./-components/TenantsPage";
import { z } from "zod";
const searchparams = z.object({
  sq: z.string().optional(),
});
export const Route = createFileRoute("/admin/tenants/")({
  component: TenantsPage,
  validateSearch: (search) => searchparams.parse(search),
});
