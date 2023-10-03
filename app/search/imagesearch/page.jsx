import React from "react";
import fetchData from "@/app/utils/fetchData";
import ImageItem from "@/app/components/ImageItem";
const ImageSearch = async () => {
  let { status, items } = await fetchData("javascript", "imagesearch");
  if (!items) throw new Error("No results found");
  return (
    <div className="flex gap-5 pb-28 min-h-[80vh]">
      {/* <div className="basis-[140px]"></div> */}
      <div className="search-result-container  flex-1 p-5 flex flex-wrap">
        {items.map((item, idx) => {
          return <ImageItem key={idx} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ImageSearch;
