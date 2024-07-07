import { createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute("/admin/_layout")({
  component: AdminLayoutComponent,

});


function AdminLayoutComponent() {
  return (
    <div>
      <div>Admin</div>
      <hr />
      <Outlet />
    </div>
  )
}
