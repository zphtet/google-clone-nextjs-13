import React from "react";
import fetchData from "@/app/utils/fetchData";
import ResutlItem from "@/app/components/ResutlItem";
import Pagination from "@/app/components/pagination";
import ItemSkeleton from "@/app/components/ItemSkeleton";
const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished waiting");
    }, 5000);
  });
};
const AllSearch = async ({ searchParams }) => {
  // console.log("SearchParams", searchParams);
  await wait();
  console.log("searchParams", searchParams.s, searchParams.start);
  // const { status, items } = await fetchData(searchParams.s);
  // if (!items) throw new Error("No results found");
  return (
    <div className="pb-28">
      <div className="flex gap-5  min-h-[80vh] relative border border-red-500">
        <div className="basis-[140px]"></div>
        <div className="search-result-container  flex-1 p-5">
          {/* {items.map((result, idx) => (
          <ResutlItem key={idx} data={result} />
        ))} */}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default AllSearch;
