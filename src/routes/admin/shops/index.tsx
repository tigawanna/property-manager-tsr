import { createFileRoute } from '@tanstack/react-router'
import { ShopsPage } from './-components/ShopsPage';

export const Route = createFileRoute("/admin/shops/")({
  component: ShopsPage,
});
