import React from 'react'
import Image from '../../assets/images/Image.png'
import Button from './Button'
export const NewsCards = ({ username, userdetail, image,buttonText }) => {
    return (
        <div className='!bg-white shadow-md mt-5 rounded-2xl  '>
            <div>
                <img src={image} className='w-full object-cover'/>
            </div>
            <div className='p-3'>
                <h5 className='font-bold rounded-xl p-2 w-fit bg-[#4B6BFB0D] text-[#4B6BFB]'>{username}</h5>
                <img src={Image} className='' />
                <h6 className='font-bold text-2xl '>{userdetail}</h6>
            </div>
           <div className="flex justify-center mt-6 mb-6">
        <Button
          text={buttonText || "Read More"}
          className="btn-tertiary w-[308px]"
        />
      </div>


        </div>
    )
}