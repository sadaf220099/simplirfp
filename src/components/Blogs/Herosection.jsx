import React from 'react'
import Banner from '../../assets/vedios/Banner.mp4'

function Herosection() {
  return (
    <section>
      <div className="relative w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Banner}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Text Section */}
        <div className="relative flex flex-col justify-center items-center text-white text-center min-h-[100vh] px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-black/40">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-semibold max-w-2xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight">
              “The Best Time To Support Small Business Is Always Today“
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
