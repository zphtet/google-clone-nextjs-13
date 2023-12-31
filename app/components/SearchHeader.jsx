"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import SearchOption from "./SearchOption";
import { BiSolidMicrophone } from "react-icons/bi";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
const SearchHeader = () => {
  const param = useSearchParams();
  const inputRef = useRef();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const searchTerm = inputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search/all?s=${searchTerm}`);
  };
  useEffect(() => {
    inputRef.current.value = param.get("s");
  }, []);
  return (
    <div className="border px-5 pt-10 pb-0 flex gap-6">
      <Link href={"/"}>
        <Image
          alt="google logo "
          src={"/googlelogo.png"}
          width={120}
          height={40}
          className="basis-[140px]"
        />
      </Link>
      <div className="search flex-1 flex flex-col ">
        <form
          onSubmit={submitHandler}
          className="border relative rounded-full  w-[min(100%,720px)] px-8 py-3 hover:shadow"
        >
          <input ref={inputRef} type="text" className="w-full outline-none" />
          <AiOutlineClose
            width={30}
            className="search-icon right-16 cursor-wait"
          />
          <RxDividerVertical className="search-icon right-11 h-full fill-blue-700" />
          <BiSolidMicrophone className="search-icon right-4 fill-blue-600" />
        </form>
        <SearchOption />
      </div>
    </div>
  );
};

export default SearchHeader;
