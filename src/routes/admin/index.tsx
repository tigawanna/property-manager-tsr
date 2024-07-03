import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/admin/")({
  component:DashboardPage
});


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
return (
 <div className='w-full h-full  min-h-screen flex justify-center items-center'>
  <h1 className="text-3xl">Dashboard</h1>
 </div>
);
}
