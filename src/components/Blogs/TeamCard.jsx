import React from 'react'
import { Icon } from '@iconify/react'
import vector6 from '../../assets/images/Vector6.png'
export const TeamCard = ({ productname,producttitle, productdetail, Image, image }) => {
    return (
        <div className=" max-w-[310px] !min-h-[447px]  md:max-w-full  pb-[33px]  mt-24 border-2 border-[#DCDCDC] bg-[#FFFFFF2E]  shadow-lg group cursor-pointer">
            <div className='relative'>
                <img src={vector6} className=' w-full ' />
            <img src={image} className="absolute top-3 sm:top-2 right-15 sm:right-4 w-[150px]  sm:w-[271px] mx-auto  p-3 " />
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
