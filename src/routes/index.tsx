import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center h-2">
     index component
    </div>
  )
}
