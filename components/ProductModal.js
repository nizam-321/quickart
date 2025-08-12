import React, { useState } from "react";

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-48 object-contain rounded"
        />
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-700 text-lg mt-2">₹{product.price.toLocaleString("en-IN")}</p>
        <p className="text-sm text-gray-500 mt-2">
          This is a sample description for {product.title}. You can customize this.
        </p>
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="border border-gray-300 p-3 px-6 font-bold text-gray-600 border-r-0"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-16 border border-gray-300 p-3 px-2 text-gray-600 text-center font-bold "
            />
            <button
              onClick={() => handleQuantityChange(1)}
              className="border border-gray-300 p-3 px-6  font-bold text-gray-600 border-l-0 "
            >
              +
            </button>

         
            
          </div>
           <button className="cursor-pointer group p-3 w-full bg-black text-white ">
          Add to Cart
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductModal;
