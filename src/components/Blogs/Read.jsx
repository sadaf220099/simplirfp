import React from 'react'
import Button from '../../shared/Button'
import read from '../../assets/images/read.png'

function Read() {
  return (
    <div className="w-full bg-white px-4 -mt-30 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 pb-[229px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      
      {/* LEFT TEXT SECTION */}
      <div className="w-full lg:w-1/2 max-w-xl  text-center lg:text-left space-y-8">
        <div>
          <div className="flex justify-center lg:justify-start items-center gap-2 flex-wrap">
            <h1 className="font-bold text-black text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px]">
              Good Bye
            </h1>
            <h1 className="font-bold text-[#32C4C0] text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px]">
              To Read
            </h1>
          </div>
          <h2 className="font-bold text-black text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px]">
            Long Contracts
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur. A vitae posuere libero condimentum.
          Ipsum pulvinar pretium lacus sed volutpat. Montes sit odio amet lacus viverra.
          Tellus rhoncus tristique arcu dolor.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button text="Read More" className="btn-tertiary w-[205px] h-[68px] mt-4" />
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="w-full lg:w-1/2 max-w-xl flex justify-center">
        <img
          src={read}
          alt="Reading illustration"
          className="w-full max-w-md sm:max-w-lg object-contain"
        />
      </div>
    </div>
  )
}

export default Read
