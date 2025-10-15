import React from 'react'
import section4 from '../../assets/images/section4.png'
import cards from '../../assets/images/cards.png'

function Customers() {
  return (
    <section>
      <div
        className="relative w-full mt-[286px] bg-cover bg-center cursor-pointer bg-no-repeat overflow-hidden py-16 px-6 sm:px-10 lg:px-20"
        style={{ backgroundImage: `url(${section4})` }}
      >

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-xl">
            <h1 className="font-semibold text-white tracking-[0%] text-3xl sm:text-5xl lg:text-6xl leading-tighter">
              Customers are <br className="hidden sm:block" />
              always happy <br className="hidden sm:block" />
              to use this app!
            </h1>

            <h2 className="text-white  tracking-[0%] sm:text-base lg:text-lg leading-tighter">
              Many top stocks are pricey, which makes it
              hard to get for started. Take Amazon, at $1000
              a share. At Stockpile, you can buy fractional
              shares. stocks are pricey, which makes it hard.
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <img
              src={cards}
              alt="Customer Cards"
            // className="w-[80%] sm:w-[70%] lg:w-[85%] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
