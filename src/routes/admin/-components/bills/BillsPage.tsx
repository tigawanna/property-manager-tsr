import { BillsContainer } from "./list/BillsContainer";


interface BillsPageProps {

}

export function BillsPage({}:BillsPageProps){
return (
 <div className='w-full h-full min-h-screen  flex flex-col items-center justify-center'>
    <h1 className="text-5xl">Bills</h1>
    <BillsContainer/>
 </div>
);
}
