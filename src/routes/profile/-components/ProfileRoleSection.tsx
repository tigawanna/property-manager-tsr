import { pb } from "@/lib/pb/client";
import { useSuspenseQuery } from "@tanstack/react-query";


interface ProfileRoleSectionProps {
  userId: string;
}

export function ProfileRoleSection({ userId }: ProfileRoleSectionProps) {
  const query = useSuspenseQuery({
    queryKey: ["viiewer", userId],
    queryFn: async () => {
      return pb.from("property_user").getList(1, 20, {
        expand: "bproperty_staff_list.id",
      });
    },
  });
  return <div className="w-full h-full flex flex-col items-center justify-center"></div>;
}
