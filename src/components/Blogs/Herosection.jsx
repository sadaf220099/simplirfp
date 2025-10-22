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
        <div className="relative flex flex-col justify-center items-center text-white text-center min-h-[600px] px-6 sm:px-10 lg:px-20 py-16 bg-black/40">
          <div className="space-y-4">
            <h1 className="font-semibold max-w-2xl text-3xl sm:text-4xl lg:text-6xl">
             “The Best Time To Support Small Business Is Always Today “
            </h1>
            <h2 className="text-base text-gray-200 max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
