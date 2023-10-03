import React from "react";
import Parser from "html-react-parser";
import Link from "next/link";
const ResutlItem = ({ data }) => {
  //   console.log(data);
  const { title, htmlTitle, link, displayLink, snippet, htmlSnippet } = data;
  return (
    <div className="mb-5 w-[min(100%,800px)]">
      <Link className="text-xs" href={link || displayLink}>
        {Parser(link || displayLink)}
      </Link>

      <p className="text-blue-500"> {Parser(htmlTitle)}</p>
      <p>{Parser(htmlSnippet || snippet)}</p>
    </div>
  );
};

export default ResutlItem;
