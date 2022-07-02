import React from "react";
import Link from "next/link";
import HomeIcon from "@components/SVGIcons/HomeIcon";
import CartIcon from "@components/SVGIcons/CartIcon";

function Navbar() {
  return (
    <div>
      <nav className="w-full bg-teal-500 mb-4 p-4 shadow-xl">
        <ul className="flex list-none w-full justify-between">
          <li>
            <Link href={"/"}>
              <a className="text-white">
                <HomeIcon /> Home
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="text-white">
                <CartIcon /> Cart
              </a>
            </Link>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
