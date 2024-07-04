import { ParkuiToast, toaster } from "@/components/navigation/ParkuiToast";
import { Button } from "@/components/park/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center h-2">
      {/* <div className="bg-accent-default p-[5%]">
        <h1 className="text-3xl ">Accent test</h1>
      </div> */}
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "info",
          })
        }>
        Add Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "error",
          })
        }>
        Add Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "success",
          })
        }>
        Success toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "loading",
          })
        }>
        Loading toast
      </Button>

    </div>
  );
}
