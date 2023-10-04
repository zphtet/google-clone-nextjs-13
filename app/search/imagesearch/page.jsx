import React from "react";
import fetchData from "@/app/utils/fetchData";
import ImageItem from "@/app/components/ImageItem";
import Pagination from "@/app/components/Pagination";
import ImageCardSkeleton from "@/app/components/ImageCardSkeleton";
const ImageSearch = async ({ searchParams }) => {
  const { items } = await fetchData(
    searchParams.s,
    "imagesearch",
    searchParams.start
  );
  if (!items) throw new Error("No results found");
  return (
    <div className="pb-28">
      <div className="flex gap-5  min-h-[80vh] relative">
        <div className="search-result-container  flex-1 p-5 flex flex-wrap">
          {items.map((item, idx) => {
            return <ImageItem key={idx} data={item} />;
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ImageSearch;
