import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center h-2">
      <div className="bg-accent-default p-[5%]">
        <h1 className="text-3xl ">Accent test</h1>
      </div>
    </div>
  );
}
