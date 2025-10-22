import React from 'react'
import Button from '../../shared/Button'
import image1 from '../../assets/images/image1.png'
import Banner from '../../assets/vedios/Banner.mp4'
import Input from '../../shared/Input'

function Herosection() {
  return (
    <section>
      <div className="relative z-20 w-full h-screen overflow-hidden">
{/* <div className="absolute left-0 right-0 -bottom-3 z-[50] flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <Input className="w-full max-w-[500px]" />
        </div> */}
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={Banner}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Section */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center text-white h-full 
                        px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 bg-black/40">

          {/* Left Content */}
          <div className="space-y-3 text-center lg:text-left">
            <h1 className="font-semibold max-w-md tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl ">
              Canada&apos;s #1 Source<br />
              of Business
              Opportunities
            </h1>

            <h2 className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>

            <div className="flex justify-center lg:justify-start">
              <Button
                type="submit"
                text="Join Us Today"
                className="btn-primary px-8 sm:px-10 lg:px-11 py-5 sm:py-6 lg:py-7 text-base sm:text-lg"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src={image1}
              alt="Hero Illustration"
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-[85%] max-w-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
