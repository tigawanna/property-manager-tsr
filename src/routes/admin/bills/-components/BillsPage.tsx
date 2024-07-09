import { BillsContainer } from "./list/BillsContainer";

interface BillsPageProps {}

export function BillsPage({}: BillsPageProps) {
  return (
    <div className="w-full h-full min-h-screen  flex flex-col items-center ">
      <BillsContainer />
    </div>
  );
}
