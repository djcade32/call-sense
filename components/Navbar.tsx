import Image from "next/image";
import React from "react";
import logo from "@/public/images/call-sense-logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center py-6 px-10 justify-between border-b border-neutral-gray/30 ">
      <Image src={logo} width={200} height={133} alt="call sense logo" />
      <ul className="flex items-center text-lg font-semibold gap-6">
        <li className="nav-link">Start Analysis</li>
        <li className="nav-link">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
