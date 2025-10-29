
import React from 'react'

export const ContractCards = ({ productname, productdetail, Image }) => {
  return (
    <div className="group w-[456px] h-[265px] p-10 border border-white/40 bg-white  hover:bg-transparent rounded-2xl shadow-lg transition-all duration-300">

      <img src={Image} className="w-30 h-30 mx-auto p-3" alt={productname} />

      <h2 className="text-xl font-bold text-center text-[#52e7e2] group-hover:text-white transition-colors duration-300">
        {productname}
      </h2>

      <p className="text-md text-[#1F2D5C] text-center px-2 py-3 group-hover:text-white transition-colors duration-300">
        {productdetail}
      </p>
      
    </div>
  )
}
