import { PropertyUserCreate } from "@/lib/pb/database";
import { formOptions, useForm } from "@tanstack/react-form";
import { FieldInfo } from "@/lib/tanstack/form/components";
import { Input } from "@/components/park/ui/input";
import { FormLabel } from "@/components/park/ui/form-label";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { pb } from "@/lib/pb/client";
import { toaster } from "@/components/navigation/ParkuiToast";
import { TextFormField } from "@/lib/tanstack/form/TextFields";
import { MutationButton } from "@/lib/tanstack/query/MutationButton";

interface SignupComponentProps {}

const signinSchema: z.ZodType<PropertyUserCreate> = z.object({
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

const formOpts = formOptions<PropertyUserCreate>({
  defaultValues: {
    username: "",
    email: "",
    emailVisibility: true,
    password: "",
    passwordConfirm: "",
    role: "user",
    pnone: "",
    avatarUrl: "",
  },
});

export function SignupComponent({}: SignupComponentProps) {
  const mutation = useMutation({
    mutationFn: (data: PropertyUserCreate) => {
      return pb.from("property_user").create(data);
    },
    onSuccess(data) {
      toaster.create({
        title: "Logged in",
        description: `Welcome ${data.username}`,
        type: "success",
        duration: 2000,
      });

    },
    onError(error) {
      toaster.create({
        title: "Something went wrong",
        description: `${error.message}`,
        type: "error",
        duration: 20000,
      });
    },
  });
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
    },
  });

  return (
    <div className="w-full  h-full flex flex-col items-center justify-center   ">
      <form className="w-[90%] md:w-[60%] lg:w-[50%] h-full flex flex-col items-center justify-center p-[2%] bg-bg-muted rounded-md gap-3 ">
        <h1 className="text-4xl">Signup</h1>
        <form.Field
          name="username"
          validatorAdapter={zodValidator()}
          validators={{
          onChange: z.string(),
          }}
          children={(field) => {
            return (
              <TextFormField<PropertyUserCreate>
                field={field}
                fieldKey="username"
                inputOptions={{
                  onBlur: field.handleBlur,
                  onChange: (e) => field.handleChange(e.target.value),
                }}
              />
            );
          }}
        />
        <form.Field
          name="email"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: z.string().email(),
          }}
          children={(field) => {
            return (
              <TextFormField<PropertyUserCreate>
                field={field}
                fieldKey="email"
                inputOptions={{
                  onBlur: field.handleBlur,
                  onChange: (e) => field.handleChange(e.target.value),
                }}
              />
            );
          }}
        />
        <form.Field
          name="password"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: z.string().min(8),
          }}
          children={(field) => {
            return (
              <TextFormField<PropertyUserCreate>
                field={field}
                fieldKey="password"
                
                inputOptions={{
                  type:"password",
                  onBlur: field.handleBlur,
                  onChange: (e) => field.handleChange(e.target.value),
                }}
              />
            );
          }}
        />
        <form.Field
          name="passwordConfirm"
          validatorAdapter={zodValidator()}
          validators={{
            onChange: z.string().min(8),
          }}

          children={(field) =>  {
            return (
              <TextFormField<PropertyUserCreate>
                field={field}
                fieldKey="passwordConfirm"
                fieldlabel="Confirm password"
                inputOptions={{
                  type: "password",
                  onBlur: field.handleBlur,
                  onChange: (e) => field.handleChange(e.target.value),
                }}
              />
            );
          }}
        />
        <MutationButton mutation={mutation}/>
      </form>
    </div>
  );
}
