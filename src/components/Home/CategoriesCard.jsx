import React from "react";

const CategoriesCard = ({ frontText, number, icon }) => {
  return (
    <div className="relative w-[322px] h-[185px] rounded-xl shadow-xl overflow-hidden cursor-pointer group">
      {/* FRONT CARD — always visible */}
      <div
        className="
          absolute inset-0 
          flex items-center justify-center 
          text-white font-semibold text-lg
          bg-gradient-to-r from-[#1F2D5C] to-[#0A1988]
          z-10
        "
      >
        {frontText}
      </div>
      <div
        className="
          absolute inset-0
          flex flex-col items-center justify-center
          text-white font-bold text-3xl
          bg-gradient-to-r from-[#54B0E4] to-[#0AC5A8]
          transform translate-y-full
          transition-transform duration-700 ease-out
          group-hover:translate-y-0
          z-20
        "
      >
        <span className="mb-1 text-2xl">{icon}</span>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default CategoriesCard;
