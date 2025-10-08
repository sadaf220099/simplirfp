import React from 'react'
import AI from '../../assets/images/AI.png'
import Button from './Button'

function Ai() {
  return (
    <div className="bg-white cursor-pointer w-full overflow-hidden py-12 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section - Image */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src={AI}
            alt="Artificial Intelligence Illustration"
            className="w-[80%] sm:w-[70%] lg:w-[90%] h-auto object-contain"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black leading-snug">
            Make your business <br className="hidden sm:block" />
            comfortable with <br className="hidden sm:block" />
            Artificial Intelligence
          </h1>

          <h2 className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. A vitae posuere libero
            condimentum. Ipsum pulvinar pretium lacus sed volutpat. Montes sit
            odio amet lacus viverra. Tellus rhoncus tristique arcu dolor.
          </h2>

          <div className="flex justify-center lg:justify-start">
            <Button
              text="Read More"
              className="btn-tertiary w-[180px] sm:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ai
