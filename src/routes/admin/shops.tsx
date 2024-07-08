import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/shops')({
  component: () => <div>Hello /admin/shops!</div>
})