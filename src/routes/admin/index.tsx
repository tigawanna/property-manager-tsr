import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/admin/")({
  component:AdminPage
});


interface AdminPageProps {

}

export function AdminPage({}:AdminPageProps){
return (
 <div className='w-full h-full  min-h-screen flex justify-center items-center'>
  <h1 className="text-3xl">Admin</h1>
 </div>
);
}
