import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageItem = ({ data }) => {
  const { title, thumbnailImageUrl, contextLink } = data;
  return (
    <div className="w-[25%] ">
      <Image src={thumbnailImageUrl} width={400} height={200} />
      <p>{title}</p>
      <Link className="text-xs pt-0" href={contextLink}>
        {contextLink}
      </Link>
    </div>
  );
};

export default ImageItem;
