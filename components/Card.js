import React from "react";
import Image from "next/image";

const Card = ({ title, price, imageUrl }) => {
  return (
    <div className="w-full bg-white h-auto shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 mb-5 p-5 flex flex-col">
      <div className="text-center">
        <h4 className="w-full text-[20px] text-[#30302e] font-bold pb-[5px]">
          {title || "Product Title"}
        </h4>
        <p className="w-full text-[16px] text-[#f26522] m-0">
          Price
          <span className="text-[#262626] ml-2">₹{price || "N/A"}</span>
        </p>
      </div>

      <div className="relative md:w-[300px] w-full h-[370px] my-12">
        <Image
          src={imageUrl || "/images/default-product.png"}
          alt={title || "Product Image"}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="flex justify-between w-full mt-auto">
        <button className="text-[16px] text-[#f26522] bg-transparent font-bold hover:underline">
          Buy Now
        </button>
        <button className="text-[16px] text-[#262626] bg-transparent hover:underline">
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
