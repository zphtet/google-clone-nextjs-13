import React from "react";
import fetchData from "@/app/utils/fetchData";
import ResutlItem from "@/app/components/ResutlItem";
import Pagination from "@/app/components/pagination";
const AllSearch = async ({ searchParams }) => {
  const { items } = await fetchData(searchParams.s, "all", searchParams.start);
  if (!items) throw new Error("No results found");
  return (
    <div className="pb-28">
      <div className="flex gap-5  min-h-[80vh] relative">
        <div className="basis-[140px]"></div>
        <div className="search-result-container  flex-1 p-5">
          {items.map((result, idx) => (
            <ResutlItem key={idx} data={result} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default AllSearch;
