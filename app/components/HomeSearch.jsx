"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";

import { useRouter } from "next/navigation";
const HomeSearch = () => {
  const inputRef = useRef("");
  const router = useRouter();
  const searchHandler = (e) => {
    // console.dir(e.target);
    e.preventDefault();

    const searchTerm = inputRef.current?.value;
    if (!searchTerm.trim()) return;
    console.log(searchTerm);
    router.push(`/search/all?s=${searchTerm}`);
  };

  return (
    <div className=" flex flex-col gap-5  items-center  py-2 mt-10">
      <Image
        alt="google logo"
        src={"/googlelogo.png"}
        width={300}
        height={200}
        className="text-center"
      />

      <form
        onSubmit={searchHandler}
        className="w-full grid place-items-center home-form py-4"
      >
        <div className="home-input-group">
          <input
            ref={inputRef}
            className="home-input w-full outline-none"
            //   placeholder="enter keyword to search"
            type="text"
          />
          <AiOutlineSearch className=" search-icon left-2  " />
          <BiSolidMicrophone className="search-icon right-2" />
        </div>
      </form>
      <div className="flex gap-5">
        <button onClick={searchHandler} className="search-btn">
          Google Search
        </button>
        <button className="search-btn">I am feeling Lucky</button>
      </div>
    </div>
  );
};

export default HomeSearch;
