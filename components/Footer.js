import React from "react";

const Footer = () => {
  return (
    <div className="w-full float-left bg-[#252525] h-auto pt-[90px] pb-0 mt-12">
        {/* footer section start */}
      <div className="w-full px-[15px] mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold text-white  text-center">
            QuickKart
          </h1>
        </div>
        <div className="w-[60%] mx-auto text-center flex border-b border-white">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full float-left text-[18px] text-white bg-transparent py-[5px] h-[60px] border-0 focus:outline-none"
          />
          <span className="w-[30%] float-right text-[16px] text-[#f26522] bg-transparent pt-[20px] pb-[5px] rounded-[30px] border-0 uppercase text-right">
            <button>SUBSCRIBE</button>
          </span>
        </div>
        <div className="w-full mx-auto text-center">
          <ul className="m-0 p-0 inline-block">
            <li className="float-left text-[16px] text-[#f1f1f1] pt-[20px] px-[10px] pb-0 cursor-pointer hover hover:text-orange-600 transition duration-300">
              Best Sellers
            </li>
            <li className="float-left text-[16px] text-[#f1f1f1] pt-[20px] px-[10px] pb-0 cursor-pointer hover hover:text-orange-600 transition duration-300 ">
              Gift Ideas
            </li>
            <li className="float-left text-[16px] text-[#f1f1f1] pt-[20px] px-[10px] pb-0 cursor-pointer hover hover:text-orange-600 transition duration-300">
              Today's Deals
            </li>
            <li className="float-left text-[16px] text-[#f1f1f1] pt-[20px] px-[10px] pb-0 cursor-pointer hover hover:text-orange-600 transition duration-300">
              Best Sellers
            </li>
            <li className="float-left text-[16px] text-[#f1f1f1] pt-[20px] px-[10px] pb-0 cursor-pointer hover hover:text-orange-600 transition duration-300">
              Customer Service
            </li>
          </ul>
        </div>
        <div className="float-left text-[16px] text-white p-[30px] w-full mx-auto pt-[30px] text-center">
          Help Line Number :&nbsp;
          <a href="#" className="text-[#ffffff] hover hover:text-orange-600 transition duration-300">
            +1 1800 1200 1200
          </a>
        </div>
      </div>
     {/* footer section end */}

     {/* copyright section */}
     <div className="w-full float-left bg-[#252525] h-auto text-center text-white text-sm mb-2">
        
        <p>© 2025 All Rights Reserved.</p>
      

     </div>
      
    </div>

  );
};

export default Footer;
