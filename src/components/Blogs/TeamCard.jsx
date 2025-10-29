import React from 'react'
import { Icon } from '@iconify/react'
import vector6 from '../../assets/images/vector6.png'
export const TeamCard = ({ productname,producttitle, productdetail, Image, image }) => {
    return (
        <div className="w-[310px] h-[447px]  mt-24 border-2 border-[#DCDCDC] bg-[#FFFFFF2E]  shadow-lg group cursor-pointer">
            <div className='relative'>
                <img src={vector6} className='' />
            <img src={image} className="absolute top-3 right-4 w-[271px] h-[243px] mx-auto p-3 " />
            </div>
            <h1 className="text-xl font-bold text-center text-[#282828] ">
                {productname}
            </h1>
           <h2 className="text-md  text-center text-[#3E3E59] ">
                {producttitle}
            </h2>
            <p className="text-md text-[#5F6980] text-center px-2 py-3 ">
                {productdetail}
            </p>
            <img src={Image} className=" mx-auto p-3 " />
        </div>
    )
}
