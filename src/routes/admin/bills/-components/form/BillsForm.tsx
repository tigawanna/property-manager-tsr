import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Loader } from "lucide-react";
import { BillMutationFields, MonthlyBills } from "../api/bills";
import { PropertyBillsCreate, PropertyBillsUpdate } from "@/lib/pb/database";
import { toaster } from "@/components/navigation/ParkuiToast";
import { useForm } from "@tanstack/react-form";
import {
  BillsInput,
  genInitValues,
  isBillingNewMonth,
  useBillsPeriod,
} from "../api/use-bills-period";
import { pb } from "@/lib/pb/client";
import { Button } from "@/components/park/ui/button";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { TextFormField } from "@/lib/tanstack/form/TextFields";
import { z } from "zod";
import { ErrorWrapper } from "@/components/wrappers/ErrorWrapper";

interface BillsFormProps {
  bill: MonthlyBills;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  next?: () => void;
}

export function BillsForm({ bill, setOpen, next }: BillsFormProps) {
  const is_new_bill = isBillingNewMonth(bill);
  const { period } = useBillsPeriod();
  const [initBill] = useState<BillsInput>(genInitValues(bill, is_new_bill));

  const new_bill_mutation = useMutation({
    mutationFn: (input: PropertyBillsCreate) => {
      return pb.from("property_bills").create(input, {
        select: {
          expand: {
            shop: true,
          },
        },
      });
    },
    meta: { invalidates: ["monthly-bills"] },
    onError(error) {
      toaster.create({
        title: "Something went wrong",
        description: `${error.message}`,
        placement: "bottom-end",
      });
    },
    onSuccess() {
      toaster.create({
        title: "success",
        type: "success",
        placement: "bottom-end",
      });
      next?.();
      setOpen(false);
    },
  });

  const update_bill_mutation = useMutation({
    mutationFn: (input: PropertyBillsUpdate & { id: string }) => {
      return pb.from("property_bills").update(input.id, input, {
        select: {
          expand: {
            shop: true,
          },
        },
      });
    },
    meta: { invalidates: ["monthly-bills"] },
    onError(error) {
      toaster.create({
        title: "Something went wrong",
        description: `${error.message}`,
        placement: "bottom-end",
      });
    },
    onSuccess() {
      toaster.create({
        title: "success",
        type: "success",
        placement: "bottom-end",
      });
      next?.();
      setOpen(false);
    },
  });

  function handleSubmit(input: BillsInput) {
    if (is_new_bill === "prev_no_curr" || is_new_bill === "no_prev_no_curr") {
      const new_bill: BillMutationFields = {
        elec_readings: parseFloat(parseFloat(input.curr_elec).toFixed(2)),
        water_readings: parseFloat(parseFloat(input.curr_water).toFixed(2)),
        shop: bill.shop_id,
        month: period.curr_month,
        year: period.curr_year,
      };
      new_bill_mutation.mutate(new_bill);
      return;
    }

    if (initBill.curr_elec !== input.curr_elec || initBill.curr_water !== input.curr_water) {
      const new_bill: PropertyBillsUpdate & { id: string } = {
        elec_readings: parseFloat(parseFloat(input.curr_elec).toFixed(2)),
        water_readings: parseFloat(parseFloat(input.curr_water).toFixed(2)),
        shop: bill.shop_id,
        month: parseInt(bill.curr_month),
        year: parseInt(bill.curr_year),
        id: bill.curr_bill_id,
      };

      update_bill_mutation.mutate(new_bill);
    }

    if (initBill.prev_elec !== input.prev_elec || initBill.prev_water !== input.prev_water) {
      const new_bill: PropertyBillsUpdate & { id: string } = {
        elec_readings: parseFloat(parseFloat(input.prev_elec).toFixed(2)),
        water_readings: parseFloat(parseFloat(input.prev_water).toFixed(2)),
        shop: bill.shop_id,
        month: parseInt(bill.prev_month),
        year: parseInt(bill.prev_year),
        id: bill.prev_bill_id,
      };

      update_bill_mutation.mutate(new_bill);
    }
    // setInput(genInitValues())
  }
  const form = useForm({
    defaultValues: initBill,
    onSubmit: async ({ value }) => {
      await handleSubmit(value);
    },
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="w-full flex flex-wrap justify-center items-center gap-8">
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {/* water */}
          <div className="min-w-[40%] flex flex-col  justify-center items-center gap-3">
            <form.Field
              name="prev_water"
              validatorAdapter={zodValidator()}
              validators={{
                onChange: z.string(),
              }}
              children={(field) => {
                return (
                  <TextFormField<BillsInput>
                    field={field}
                    fieldKey="prev_water"
                    fieldlabel="previous water"
                    inputOptions={{
                      onBlur: field.handleBlur,
                      type: "number",
                      onChange: (e) => field.handleChange(e.target.value),
                    }}
                  />
                );
              }}
            />
            <form.Field
              name="curr_water"
              validatorAdapter={zodValidator()}
              validators={{
                onChange: z.string(),
              }}
              children={(field) => {
                return (
                  <TextFormField<BillsInput>
                    field={field}
                    fieldKey="curr_water"
                    fieldlabel="current water"
                    inputOptions={{
                      onBlur: field.handleBlur,
                      type: "number",
                      onChange: (e) => field.handleChange(e.target.value),
                    }}
                  />
                );
              }}
            />
            <form.Subscribe
              selector={(state) => [state.values.curr_water, state.values.prev_water]}
              children={([curr, prev]) => {
                const diff = parseFloat(curr) - parseFloat(prev);
                const textColorClassName = diff < 0 ? "text-error" : diff > 0 ? "text-success" : "";
                return <div className={textColorClassName}> diff: {diff.toFixed(2)}</div>;
              }}
            />
          </div>
          {/*  elec */}
          <div className="min-w-[40%] flex flex-col justify-center items-center gap-3">
            <form.Field
              name="prev_elec"
              validatorAdapter={zodValidator()}
              validators={{
                onChange: z.string(),
              }}
              children={(field) => {
                return (
                  <TextFormField<BillsInput>
                    field={field}
                    fieldKey="prev_elec"
                    fieldlabel="previous elec"
                    inputOptions={{
                      onBlur: field.handleBlur,
                      type: "number",
                      onChange: (e) => field.handleChange(e.target.value),
                    }}
                  />
                );
              }}
            />
            <form.Field
              name="curr_elec"
              validatorAdapter={zodValidator()}
              validators={{
                onChange: z.string(),
              }}
              children={(field) => {
                return (
                  <TextFormField<BillsInput>
                    field={field}
                    fieldKey="curr_elec"
                    fieldlabel="current elec"
                    inputOptions={{
                      onBlur: field.handleBlur,
                      type: "number",
                      onChange: (e) => field.handleChange(e.target.value),
                    }}
                  />
                );
              }}
            />
            <form.Subscribe
              selector={(state) => [state.values.curr_elec, state.values.prev_elec]}
              children={([curr, prev]) => {
                const diff = parseFloat(curr) - parseFloat(prev);
                const textColorClassName = diff < 0 ? "text-error" : diff > 0 ? "text-success" : "";
                return <div className={textColorClassName}> diff: {diff.toFixed(2)}</div>;
              }}
            />
          </div>
        </div>

        {new_bill_mutation.isError && <ErrorWrapper err={new_bill_mutation.error} />}
        {update_bill_mutation.isError && <ErrorWrapper err={update_bill_mutation.error} />}

        {is_new_bill === "prev_no_curr" || is_new_bill === "no_prev_no_curr" ? (
          <Button disabled={new_bill_mutation.isPending}>
            Create {new_bill_mutation.isPending && <Loader className="w-4 h-4 animate-spin" />}
          </Button>
        ) : (
          <Button disabled={update_bill_mutation.isPending}>
            Update {update_bill_mutation.isPending && <Loader className="w-4 h-4 animate-spin" />}
          </Button>
        )}
      </form>
    </div>
  );
}
