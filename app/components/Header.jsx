import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-sm border-b  flex items-center justify-end gap-4 p-5 ">
      <Link className="hover:underline" href="https://mail.google.com/">
        Gamil
      </Link>
      <Link className="hover:underline" href="https://images.google.com/">
        Images
      </Link>
      <button className="btn">Sign In</button>
    </div>
  );
};

export default Header;
