import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col bg-banner bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/banner-bg.jpg')` }}
      >
        {/* Header */}
        <div className="relative hidden md:block ">
          <div
            className="relative z-10 bg-[#2b2a29] text-white text-lg font-medium py-2 px-6
        clip-diagonal mx-auto max-w-7xl flex justify-center gap-6 pt-[20px] pb-[20px]"
          >
            <ul className="flex gap-6">
              <li className="hover hover:text-orange-500 transition duration-300">
                <Link href="#">Best Sellers</Link>
              </li>
              <li className="hover hover:text-orange-500 transition duration-300">
                <Link href="#">Gift Ideas</Link>
              </li>
              <li className="hover hover:text-orange-500 transition duration-300">
                <Link href="#">New Releases</Link>
              </li>
              <li className="hover hover:text-orange-500 transition duration-300">
                <Link href="#">Todays Deals</Link>
              </li>
              <li className="hover hover:text-orange-500 transition duration-300">
                <Link href="#">Customer Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* logo Heading */}
        <h1 className="text-4xl  text-white font-extrabold text-center py-6 mt-4">
          Quickart
        </h1>

        <div className="px-4 md:px-42">
          <div className="w-full flex items-center justify-between flex-wrap gap-4 md:gap-10">
            {/* Menu Icon */}
            <span className="flex-shrink-0">
              <Image
                src="/images/toggle-icon.png"
                alt="menu"
                width={32}
                height={32}
                className=" md:w-auto md:h-auto"
              />
            </span>

            {/* All Categories - hidden on small screens */}

            <div className="hidden md:flex relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-center text-white cursor-pointer px-4 p-2 rounded transition-colors duration-100
                ${isDropdownOpen ? "bg-[#6E6767]" : "bg-[#2b2a29]"}`}
              >
                All Category
                <FaAngleDown className="text-sm pl-2" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded shadow-lg z-50">
                  <ul className="text-black p-2">
                   
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                     <Link href="/#clothes">Clothing</Link> 
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                     <Link href="/#electronics">Electronics</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href="/#jewellery">Jewellery</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-grow max-w-full md:max-w-[700px]">
              <input
                type="text"
                className="p-2 text-black bg-white outline-none w-full rounded rounded-r-none"
                placeholder="Search"
              />
              <button className="bg-orange-500 text-white p-2 h-full flex items-center justify-center rounded rounded-l-none">
                <CiSearch className="text-2xl" />
              </button>
            </div>

            {/* Cart & User Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button>
                <FaCartShopping className="text-white text-2xl md:text-3xl" />
              </button>
              <button>
                <FaUser className="text-white text-2xl md:text-3xl" />
              </button>
            </div>
          </div>
        </div>

        <HeroSlider />
      </div>
    </>
  );
};

export default Navbar;
