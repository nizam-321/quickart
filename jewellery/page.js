import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/Card";

const Jewellery = () => {
  const scrollRef = useRef(null);
   const products = [
    {
      title: "Jumkas",
      price: 89999,
      imageUrl: "/images/jhumka-img.png",
    },
    {
      title: "Necklaces",
      price: 544999,
      imageUrl: "/images/neklesh-img.png",
    },
    {
      title: "Kangans",
      price: 24999,
      imageUrl: "/images/kangan-img.png",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;
    if (!container) return;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="jewellery">
    <div className="flex flex-col items-center px-4 mt-8 mb-4">
      <h1 className="text-3xl md:text-5xl text-[#30302e] font-bold mb-8 text-center">
       Jewellery
      </h1>

      <div
        className="
          w-full max-w-6xl mx-auto flex gap-8 flex-col 
          md:flex-row 
          items-center 
          px-10 md:overflow-x-auto
          scrollbar-hidden
          py-6"
        ref={scrollRef}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      {/* Show arrows only on desktop */}
      <div className="hidden md:flex gap-2 text-white">
        <button onClick={() => scroll("left")} className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300">
          <FaChevronLeft />
        </button>
        <button onClick={() => scroll("right")} className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300">
          <FaChevronRight />
        </button>
      </div>
    </div>
   </section>
  )
};

export default Jewellery;
