import { useBillsPeriod } from "../api/use-bills-period";
import { BillsPeriodPicker } from "../BillsPeriodPicker";

interface BillsContainerProps {

}

export function BillsContainer({}:BillsContainerProps){
const {period,setPeriod}=useBillsPeriod()
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
<BillsPeriodPicker period={period} setPeriod={setPeriod}/>
    {JSON.stringify(period,null,2)}
 </div>
);
}
