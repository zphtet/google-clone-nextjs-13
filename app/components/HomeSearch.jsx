"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
const HomeSearch = () => {
  return (
    <div className=" flex flex-col gap-5  items-center text-gray-400 py-2 mt-10">
      <Image
        alt="google logo"
        src={"/googlelogo.png"}
        width={300}
        height={200}
        className="text-center"
      />

      <form className="w-full grid place-items-center home-form py-4">
        <div className="home-input-group">
          <input
            className="home-input w-full outline-none"
            //   placeholder="enter keyword to search"
            type="text"
          />
          <AiOutlineSearch className=" search-icon left-2  " />
          <BiSolidMicrophone className="search-icon right-2" />
        </div>
      </form>
      <div className="flex gap-5">
        <button className="search-btn">Google Search</button>
        <button className="search-btn">I am feeling Lucky</button>
      </div>
    </div>
  );
};

export default HomeSearch;
