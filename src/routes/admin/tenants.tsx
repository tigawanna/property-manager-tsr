import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tenants')({
  component: () => <div>Hello /admin/tenants!</div>
})