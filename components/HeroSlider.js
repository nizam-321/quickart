import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "GET START",
    subtitle: "YOUR FAVORITE SHOPPING",
  },
  {
    title: "BIG DEALS",
    subtitle: "EVERYTHING ON SALE",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "FASHION TRENDS 2025",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] text-center overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">{currentSlide.title}</h1>
        <h2 className="text-xl md:text-3xl font-semibold">{currentSlide.subtitle}</h2>

        <button className="relative overflow-hidden text-white bg-[#2b2a29] text-sm font-bold mt-10 p-4 px-12 rounded cursor-pointer group">
          <span className="relative z-10">BUY NOW</span>
          <span className="absolute inset-0 bg-orange-600 transform scale-x-0 origin-left group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out"></span>
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-40 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 lg:right-40 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSlider;
