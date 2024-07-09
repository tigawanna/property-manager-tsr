import { Suspense } from "react";
import { useBillsPeriod } from "../api/use-bills-period";
import { BillsPeriodPicker } from "./BillsPeriodPicker";
import { BillsTable, BillsTableSuspenseFallback } from "./BillsTable";

interface BillsContainerProps {}

export function BillsContainer({}: BillsContainerProps) {
  const { period, setPeriod } = useBillsPeriod();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <BillsPeriodPicker period={period} setPeriod={setPeriod} />
        <Suspense fallback={<BillsTableSuspenseFallback period={period} />}>
        <div className="p-[2%] w-full">
        <BillsTable period={period} />

        </div>
      </Suspense>
    </div>
  );
}
