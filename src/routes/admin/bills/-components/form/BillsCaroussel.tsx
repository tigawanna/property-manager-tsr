import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { useState } from "react";
import { BillsForm } from "./BillsForm";
import { BillsPeriod, MonthlyBills } from "../api/bills";
import * as Dialog from "~/components/park/ui/dialog";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useBillsQuery } from "../api/use-bills";
import { IconButton } from "@/components/park/ui/icon-button";

interface BillsCarousselProps {
  period:BillsPeriod
}

export function BillsCaroussel({period}: BillsCarousselProps) {
  const query = useBillsQuery(period);
  const bills = query.data.result;
  const searchParams = useSearch({
    from: "/admin/bills/",
  });
  const navigate = useNavigate({
    from: "/admin/bills",
  });

  const bill_idx = searchParams.bill || 0;
  const [currentBill, setCurrentBill] = useState(bill_idx);

  function nextBill() {
    if (currentBill < bills.length - 1) {
      setCurrentBill((prev) => {
        return prev + 1;
      });

      navigate({
        search: {
          bill: currentBill + 1,
        },
      });
    }
  }
  function prevBill() {
    if (currentBill > 0) {
      setCurrentBill((prev) => {
        return prev - 1;
      });

      navigate({
        search: {
          bill: currentBill - 1,
        },
      });
    }
  }

  const bill = bills[currentBill];
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton variant="outline" className="hover:text-accent rounded-lg bg-accent-emphasized flex gap-2 px-1">
          <Plus />
          carrousel form
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          className="min-w-[60%] min-h-[70vh] bg-bg-emphasized p-5"
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "ArrowRight") {
              nextBill();
            }
            if (e.ctrlKey && e.key === "ArrowLeft") {
              prevBill();
            }
          }}>
          {bill && (
            <div className="w-full h-full">
              <Dialog.Title>
                {" "}
                <div className="flex flex-col">
                  <div className="text-accent font-bold">{bill.shop_number}</div>
                  {bill.shop_name}
                  <div className="flex gap-0.5">
                    <div className="flex text-accent">{currentBill}</div>/
                    <div className="flex">{bills.length}</div>
                  </div>
                </div>
              </Dialog.Title>

              <div className="h-full flex justify-center items-center">
                <button
                  className="hover:text-accent flex gap-2 btn btn-sm text-lg"
                  onClick={() => prevBill()}>
                  <ChevronLeft />
                </button>
                <div className="">
                  <BillsForm bill={bill} setOpen={() => {}} key={currentBill} next={nextBill} />
                </div>
                <button
                  className="hover:text-accent flex gap-2 btn btn-sm text-lg"
                  onClick={() => nextBill()}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          <Dialog.CloseTrigger>
            <X className="" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
