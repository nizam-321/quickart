"use client"; 
import Navbar from "@/components/Navbar";
import Clothes from "@/clothes/page";
import Electronics from "@/electronics/page";
import Jewellery from "@/jewellery/page";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Clothes className="mt-[-2]" />
      <Electronics />
      <Jewellery />
      <Loader />
      <Footer />
    </>
  );
}

export default Home;
