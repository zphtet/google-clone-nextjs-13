import React from "react";
import fetchData from "@/app/utils/fetchData";
import ResutlItem from "@/app/components/ResutlItem";
const AllSearch = async () => {
  const { status, items } = await fetchData("javascript");
  if (!items) throw new Error("No results found");
  return (
    <div className="flex gap-5 pb-28 min-h-[80vh]">
      <div className="basis-[140px]"></div>
      <div className="search-result-container  flex-1 p-5">
        {items.map((result, idx) => (
          <ResutlItem key={idx} data={result} />
        ))}
      </div>
    </div>
  );
};

export default AllSearch;
