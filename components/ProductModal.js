'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reset visibility when new product comes
    if (product) {
      setIsVisible(true);
      setQuantity(1); // Optional: reset quantity
    }
  }, [product]);

  const handleClose = () => {
    setIsVisible(false); // triggers exit animation
    setTimeout(() => {
      onClose(); // unmounts the modal after animation
    }, 300); // should match the transition duration
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative mx-4 sm:mx-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
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
            <p className="text-gray-700 text-lg mt-2">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This is a sample description for {product.title}. You can
              customize this.
            </p>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="border border-gray-300 p-3 px-6 font-bold text-gray-600 border-r-0 active:scale-95 active:bg-gray-100 transition-all duration-150 ease-in-out"
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
                  onClick={() => setQuantity((q) => q + 1)}
                  className="border border-gray-300 p-3 px-6 font-bold text-gray-600 border-l-0 active:scale-95 active:bg-gray-100 transition-all duration-150 ease-in-out "
                >
                  +
                </button>
              </div>
              <button className="cursor-pointer group p-3 w-full bg-black text-white active:scale-97 active:bg-gray-900 transition-transform duration-150 ease-in-out">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
