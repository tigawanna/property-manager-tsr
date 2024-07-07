import { createFileRoute } from '@tanstack/react-router'
import { SignupComponent } from './-components/SignupComponent';
import { z } from 'zod';
import { authGuard } from '@/lib/tanstack/query/use-viewer';


const searchparams = z.object({
  returnTo: z.string()
});
export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    // await authGuard({ ctx, reverse: true });
  }
});

interface SignupProps {

}

export function SignupPage({}:SignupProps){
return (
 <div className='w-full h-full min-h-screen flex flex-col items-center justify-center'>
    <SignupComponent/>
 </div>
);
}
