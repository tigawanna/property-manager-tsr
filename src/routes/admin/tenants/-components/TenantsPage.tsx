import { SearchBox } from "@/components/search/SearchBox";
import { useTenantsSearchQuery } from "./list/use-search";

interface TenantsPageProps {

}

export function TenantsPage({}:TenantsPageProps){
const { debouncedValue, isDebouncing, keyword, setKeyword } = useTenantsSearchQuery();
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="w-full z-20 bg-base-200 sticky top-[10%]  px-3 flex flex-col md:flex-row justify-evenly gap-3 pr-5">
      <div className="w-full flex gap-2 p-2">
        <h1 className="text-2xl font-bold bg-base-200/30 ">Brands</h1>
      </div>
      <SearchBox
        inputProps={{
          placeholder: "Search by name",
        }}
        debouncedValue={debouncedValue}
        isDebouncing={isDebouncing}
        setKeyword={setKeyword}
        keyword={keyword}
      />
    </div>
    <div className="w-full h-full flex justify-center items-center m-3 p-5">
      {isDebouncing && <div className="">IS DEBOUNCING</div>}
    </div>
  </div>
);
}
