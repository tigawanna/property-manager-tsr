import { Avatar } from "@/components/park/ui/avatar";
import { pb } from "@/lib/pb/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Mail, Phone } from "lucide-react";
import { like, or } from "typed-pocketbase";

interface TenantsListProps {
  keyword?: string;
}

export function TenantsList({ keyword = "" }: TenantsListProps) {
  const query = useSuspenseQuery({
    queryKey: ["property_tenants_list"],
    queryFn: () => {
      return pb.from("property_tenants_list").getList(1, 24, {
        filter: like("account.username", keyword),
        select: {
          expand: {
            "property_shops(tenant)": true,
          },
        },
      });
    },
  });
  const data = query.data;
  return (
    <ul className="w-full h-full flex flex-col items-center justify-center">
      {data.items.map((item) => {
        const shop = item.expand?.["property_shops(tenant)"]
        return (
          <li
            key={item.id}
            className="flex items-center w-[95%] sm:w-[45%] lg:w-[30%]  p-2 gap-3 bg-base-200 rounded-lg relative">
            <Avatar
              className="border-accent-text border-2"
              name={}
              src={`https://picsum.photos/id/${wordToNumber(item.username)}/30/30`}
            />

            <div className="w-full  ">
              <div className="max-w-[80%]  ">
                <h1 className="w-full font-bold overflow-hidden overflow-ellipsis">
                  {item.username}
                </h1>
                <div className=" flex gap-1 items-center">
                  <Mail className="w-4 h-4" />
                  <h4 className="overflow-hidden overflow-ellipsis ">{item.email}</h4>
                </div>
                <div className=" flex gap-2 items-center">
                  <Phone className="w-3 h-3" />
                  <h4 className="overflow-hidden overflow-ellipsis text-accent">{item.phone}</h4>
                </div>
              </div>
              {item.expand["utility_shops(tenant)"].length > 0 && (
                <div className="flex gap-2 items-center justify-start">
                  {item.expand["utility_shops(tenant)"].map((shop) => (
                    <div className="flex gap-2 items-center justify-start" key={shop.id}>
                      {/* <User className="w-3 h-3" /> */}
                      <h4 className="text-xs bg-accent border border-accent px-1 rounded">
                        {shop.shop_number}
                      </h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* <div className="absolute top-[5%] right-[2%]">
              <MutateTenantModal
                tenant={item}
                updating={true}
                icon={
                  <Edit2
                    className="h-3.5 w-3.5 
                  duration-200 transition-transform 
                  hover:text-accent hover:scale-[200%] hover:w-5 hover:h-5"
                  />
                }
              />
            </div> */}
          </li>
        );
      })}
    </ul>
  );
}
