import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  component:SigninPage
})

interface SigninPageProps {

}

export function SigninPage({}:SigninPageProps){
return (
  <div className="min-h-screen flex flex-col  items-center justify-center">
     <div className="min-h-[50vh] flex flex-col  items-center justify-center">
    <h1 className="text-3xl">sign in page</h1>

     </div>
    <Link to="/auth/signup" className='text-sky-400 text-sm'>new here ,signup instead</Link>
  </div>
);
}
