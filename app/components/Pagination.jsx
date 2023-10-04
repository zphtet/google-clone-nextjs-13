"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const Pagination = () => {
  const param = useSearchParams();
  const pathname = usePathname();
  const searchTerm = param.get("s");
  const start = +param.get("start");
  const router = useRouter();

  console.log("pagination rendering");
  console.log(searchTerm, "search term");
  const NextPagiHandler = () => {
    router.push(`${pathname}?s=${searchTerm}&start=${start + 1}`);
  };
  const PrevPagiHandler = () => {
    router.push(`${pathname}?s=${searchTerm}&start=${start - 1}`);
  };
  const btnDisabled = start <= 0;
  return (
    <div className=" flex gap-5 border border-blue-600 justify-end p-5">
      {
        <button
          onClick={PrevPagiHandler}
          disabled={btnDisabled}
          className={`btn-pagi ${btnDisabled && "opacity-70"}`}
        >
          prev
        </button>
      }
      <button onClick={NextPagiHandler} className="btn-pagi">
        next
      </button>
    </div>
  );
};

export default Pagination;
