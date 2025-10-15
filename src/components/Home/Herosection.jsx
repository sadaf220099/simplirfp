import React from 'react'
import Button from './Button'
import image1 from '../../assets/images/image1.png'
import Banner from '../../assets/vedios/Banner.mp4'
import Input from './Input'

function Herosection() {
  return (
    <section >
    <div className="relative w-full overflow-hidden ">
     
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Banner}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 mx-auto items-center text-white min-h-[600px] px-6 sm:px-10 lg:px-20 py-16">
      
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="font-semibold max-w-md tracking-[0%] leading-tighter text-3xl sm:text-4xl lg:text-5xl ">
            Canada&apos;s #1 Source  
            of Business 
            Opportunities
          </h1>
          <h2 className="text-base  text-gray-200 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h2>
          <div className="flex justify-center lg:justify-start">
            <Button
              type="submit"
              text="Join Us Today"
              className="btn-primary w-[180px] sm:w-[200px]"
            />
          </div>
        </div>

       
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={image1}
            alt="Hero Illustration"
            className=""
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Herosection
