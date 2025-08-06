// components/Loader.js
import React from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div
        className="rounded-full mx-auto animate-slow-spin"
        style={{
          width: '120px',
          height: '120px',
          borderWidth: '16px',
          borderStyle: 'solid',
          borderTopColor: '#414744',
          borderRightColor: '#f26522',
          borderBottomColor: '#414744',
          borderLeftColor: '#f26522',
        }}
      ></div>
    </div>
  );
};
export default Loader;
