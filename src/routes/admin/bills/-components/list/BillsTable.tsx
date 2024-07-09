import * as Table from "~/components/park/ui/table";
import { useBillsQuery } from "../api/use-bills";
import { Edit } from "lucide-react";
import { BillsPeriod } from "../api/bills";
interface MonthlyBillsTableProps {
  period: BillsPeriod;
  printing?: boolean;
}

export function MonthlyBillsTable({ period,printing }: MonthlyBillsTableProps) {
  const query = useBillsQuery(period);
  const data = query.data.result;
  return (
    <div className="w-full h-screen  overflow-auto">
      <Table.Root className="" size="sm" variant="outline">
        <Table.Caption>
          Bills {period.curr_year}/{period.curr_month}
        </Table.Caption>
        <Table.Head className="sticky top-0 bg-bg-muted">
          <Table.Row>
            {/* shop details */}
            {!printing&&<Table.Header>Order</Table.Header>}
            <Table.Header>Shop No</Table.Header>
            <Table.Header>Shop Name</Table.Header>
            {/* previous */}
            <Table.Header>Prev Water</Table.Header>
            <Table.Header>Curr Water</Table.Header>
            <Table.Header>Diff</Table.Header>
            {/* current */}
            <Table.Header>Prev Elec</Table.Header>
            <Table.Header>Prev Elec</Table.Header>
            <Table.Header>Diff</Table.Header>
            {/* update */}
            {!printing&&<Table.Header>Actions</Table.Header>}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.map((item) => {
            return (
              <Table.Row key={item.shop_id}>
                {/* shop details */}
                {!printing&&<Table.Cell>{item.list_order}</Table.Cell>}
                <Table.Cell>{item.shop_number}</Table.Cell>
                <Table.Cell>{item.shop_name}</Table.Cell>

                {/* prev */}
                <Table.Cell>{item.previous_water}</Table.Cell>
                <Table.Cell>{item.current_water}</Table.Cell>
                <Table.Cell>{parseInt(item.water_diff).toFixed(2)}</Table.Cell>
                {/* current */}
                <Table.Cell>{item.previous_water}</Table.Cell>
                <Table.Cell>{item.current_water}</Table.Cell>
                <Table.Cell>{parseInt(item.water_diff).toFixed(2)}</Table.Cell>
                {/* update */}
                {!printing&&<Table.Cell>
                  <Edit className="size-4" />
                </Table.Cell>}
              </Table.Row>
            );
          })}
        </Table.Body>
        {/* <Table.Foot>
            <Table.Row>
              <Table.Cell colSpan={2}>Totals</Table.Cell>
              <Table.Cell>87</Table.Cell>
              <Table.Cell  >$34,163.00</Table.Cell>
            </Table.Row>
          </Table.Foot> */}
      </Table.Root>
    </div>
  );
}

interface BillsTableSuspenseFallbac {
  period: BillsPeriod;
}
export function BillsTableSuspenseFallback({ period }: BillsTableSuspenseFallbac) {
    const data = Array.from({ length: 12 });
  return (
    <div className="w-full h-screen  overflow-auto">
      <Table.Root className="" size="sm" variant="outline">
        <Table.Caption>
          Bills {period.curr_year}/{period.curr_month}
        </Table.Caption>
        <Table.Head className="sticky top-0 bg-bg-muted">
          <Table.Row>
            {/* shop details */}
            <Table.Header>Order</Table.Header>
            <Table.Header>Shop No</Table.Header>
            <Table.Header>Shop Name</Table.Header>
            {/* previous */}
            <Table.Header>Prev Water</Table.Header>
            <Table.Header>Curr Water</Table.Header>
            <Table.Header>Diff</Table.Header>
            {/* current */}
            <Table.Header>Prev Elec</Table.Header>
            <Table.Header>Prev Elec</Table.Header>
            <Table.Header>Diff</Table.Header>
            {/* update */}
            <Table.Header>Actions</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.map((item,idx) => {
            return (
              <Table.Row key={idx}>
                {/* shop details */}
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />

                {/* prev */}
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                {/* current */}
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                <Table.Cell className="bg-bg-muted animate-pulse p-1" />
                {/* update */}
                <Table.Cell>
                  <Edit className="size-4" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        {/* <Table.Foot>
            <Table.Row>
              <Table.Cell colSpan={2}>Totals</Table.Cell>
              <Table.Cell>87</Table.Cell>
              <Table.Cell  >$34,163.00</Table.Cell>
            </Table.Row>
          </Table.Foot> */}
      </Table.Root>
    </div>
  );
}
