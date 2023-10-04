import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const ImageCardSkeleton = () => {
  return (
    <div className="p-5 flex flex-wrap gap-5">
      {[1, 2].map((item) => {
        return (
          <div key={item} className="w-[400px] h-[220px]">
            <Skeleton width={"400px"} height={"200px"} />
            <Skeleton />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCardSkeleton;
