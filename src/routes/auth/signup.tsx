import { createFileRoute } from '@tanstack/react-router'
import { SignupComponent } from './-components/SignupComponent';

export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
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
