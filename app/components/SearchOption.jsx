"use client";
import React from "react";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchOption = () => {
  const pathname = usePathname();
  const searchTerm = useSearchParams().get("s");
  const router = useRouter();
  const isAll = pathname.split("/")[2] === "all";
  const imagOptHandler = () => {
    router.push(`/search/imagesearch?s=${searchTerm}`);
  };
  const allOptHandler = () => {
    router.push(`/search/all?s=${searchTerm}`);
  };
  return (
    <div className="mt-5 ml-2 flex gap-7">
      <button
        className={`flex items-center gap-2  px-1 pb-1 ${
          isAll && "btn-active"
        }`}
        onClick={allOptHandler}
      >
        <AiOutlineSearch />
        <span>All</span>
      </button>
      <button
        className={`flex items-center gap-2 px-1  pb-1 ${
          !isAll && "btn-active"
        }`}
        onClick={imagOptHandler}
      >
        <AiOutlineCamera />
        <span>Images</span>
      </button>
    </div>
  );
};

export default SearchOption;
