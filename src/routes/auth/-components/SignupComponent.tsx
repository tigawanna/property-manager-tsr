import { PropertyUserCreate } from "@/lib/pb/database";
import { z } from "zod";

interface SignupComponentProps {

}

const schema: z.ZodType<PropertyUserCreate> = z.object({
  username: z.string(),
  email: z.string(),
  emailVisibility: z.boolean().optional(),
  password: z.string(),
  passwordConfirm: z.string(),
  role: z.enum(["staff", "tenant", "user"]),
  pnone: z.string().optional(),
  avatarUrl: z.string().optional(),
  staff: z.string().optional(),
  tenant: z.string().optional(),
});

export function SignupComponent({}:SignupComponentProps){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>

 </div>
);
}
