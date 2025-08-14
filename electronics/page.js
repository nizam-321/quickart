
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/Card";
import ProductModal from "@/components/ProductModal";

const Electronics = () => {
  const scrollRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const products = [
    {
      title: "Laptop",
      price: 39999,
      imageUrl: "/images/laptop-img.png",
    },
    {
      title: "Mobile",
      price: 14999,
      imageUrl: "/images/mobile-img.png",
    },
    {
      title: "Computers",
      price: 19999,
      imageUrl: "/images/computer-img.png",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="electronics">
      <div className="flex flex-col items-center px-4 mt-8 mb-4">
        <h1 className="text-3xl md:text-5xl text-[#30302e] font-bold mb-8 text-center">
          Electronic
        </h1>

        <div
          className="w-full max-w-6xl mx-auto flex gap-8 flex-col md:flex-row items-center px-10 md:overflow-x-auto scrollbar-hidden py-6"
          ref={scrollRef}
        >
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              onClick={() => setSelectedProduct(product)}
              

            />
          ))}
        </div>

        <div className="hidden md:flex gap-2 text-white">
          <button
            onClick={() => scroll("left")}
            className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300 active:scale-95 active:bg-orange-900 transition-all duration-150 ease-in-out"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300 active:scale-95 active:bg-orange-900 transition-all duration-150 ease-in-out"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Electronics;


