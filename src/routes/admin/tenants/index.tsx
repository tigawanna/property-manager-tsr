import { createFileRoute } from "@tanstack/react-router";
import { TenantsPage } from "./-components/TenantsPage";

export const Route = createFileRoute("/admin/tenants/")({
  component: TenantsPage,
});
