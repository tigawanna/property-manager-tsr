import { Suspense } from "react";
import { useBillsPeriod } from "../api/use-bills-period";
import { BillsPeriodPicker } from "./BillsPeriodPicker";
import { MonthlyBillsTable, BillsTableSuspenseFallback } from "./BillsTable";
import { Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";

interface BillsContainerProps {}

export function BillsContainer({}: BillsContainerProps) {
  const { period, setPeriod } = useBillsPeriod();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <BillsPeriodPicker period={period} setPeriod={setPeriod} />
      <div className="w-full h-1 absolute top-[5%] left-[5%]">
        <Link
          to="/admin/bills/print"
          search={{
            cm: period.curr_month,
            cy: period.curr_year,
            pm: period.prev_month,
            py: period.prev_year,
          }}>
            <Printer/>
          </Link>
      </div>
      <Suspense fallback={<BillsTableSuspenseFallback period={period} />}>
        <div className="p-[2%] w-full">
          <MonthlyBillsTable period={period} />
        </div>
      </Suspense>
    </div>
  );
}
