import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const ItemSkeleton = () => {
  return (
    <div>
      <div className="flex p-5">
        <div className="basis-[140px]"></div>
        <div className="w-[min(100%,800px)]">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div key={item}>
                <Skeleton height={"8px"} />
                <Skeleton height={"16px"} className="-mt-3" />
                <Skeleton height={"50px"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
