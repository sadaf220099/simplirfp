import React from "react";

const CategoriesCard = ({ frontText, number }) => {
  return (
    <div className="relative w-60 h-40 rounded-xl shadow-xl flex items-center justify-center text-white font-semibold text-lg group overflow-hidden cursor-pointer transition-all duration-500 bg-gradient-to-r from-[#1F2D5C] to-[#0A1988] hover:bg-[#29F2E680] hover:from-[#29F2E680] hover:to-[#29F2E680]">
    
      <span className="transition-opacity duration-500 group-hover:opacity-0">
        {frontText}
      </span>
      <span className="absolute text-4xl font-bold opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        {number}
      </span>
    </div>
  );
};

export default CategoriesCard;
