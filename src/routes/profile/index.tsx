import { authGuard } from '@/lib/tanstack/query/use-viewer';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});

interface ProfilePageProps {

}

export function ProfilePage({}:ProfilePageProps){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
<h1 className='text-3xl'>Profile page</h1>
 </div>
);
}
