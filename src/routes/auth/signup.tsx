import { createFileRoute } from '@tanstack/react-router'
import { SignupComponent } from './-components/SignupComponent';
import { z } from 'zod';

const searchparams = z.object({
  returnTo: z.string()
});
export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
  validateSearch: (search) => searchparams.parse(search),
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
