import React, {useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/Card";
import ProductModal from "@/components/ProductModal";

const Clothes = () => {
  const scrollRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { title: "Man T -shirt", price: 499, imageUrl: "/images/tshirt-img.png" },
    {
      title: "Man -shirt",
      price: 899,
      imageUrl: "/images/dress-shirt-img.png",
    },
    {
      title: "Woman Scart",
      price: 799,
      imageUrl: "/images/women-clothes-img.png",
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
    <section id="clothes">
      <div className="flex flex-col items-center px-4 -mt-12 relative mb-4">
        <h1 className="text-3xl md:text-5xl text-[#30302e] font-bold mb-8 text-center">
          Man & Woman Fashion
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
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Show arrows only on desktop */}
        <div className="hidden md:flex gap-2 text-white">
          <button
            onClick={() => scroll("left")}
            className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#30302e] p-4 hover:bg-orange-600 transition duration-300"
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

export default Clothes;
