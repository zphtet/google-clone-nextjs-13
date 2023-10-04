"use client";
import React, { useEffect } from "react";

const Footer = () => {
  const [country, setCountry] = React.useState("Somewhere");
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCountry(data.country_name);
      });
  }, []);
  return (
    <div className="absolute z-10 w-full bg-gray-200 bottom-0 px-5 py-7">
      <p className="...">
        You are using this app in{" "}
        <span className="text-blue-500">{country}</span>{" "}
      </p>
    </div>
  );
};

export default Footer;
