import React from 'react'
import Button from './Button'

export const TrendCards = ({ productname, productdetail, image, button }) => {
    return (

        <div className="w-80 mx-auto p-10 mt-24 border-white-[0.4px] bg-[#FFFFFF2E] rounded-2xl shadow-lg ">
            <h2 className="text-lg font-bold text-center text-[#1F2D5C]">{productname}</h2>
            <img src={image} className="w-30 h-30 mx-auto p-3" />
            <p className="text-sm text-[#1F2D5C] text-center px-2 py-3"> {productdetail} </p>
            <Button className='btn-hover w-[131px] mx-auto ' text={button}/>
        </div>




    )
}