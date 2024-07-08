import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/rent')({
  component: () => <div>Hello /admin/rent!</div>
})