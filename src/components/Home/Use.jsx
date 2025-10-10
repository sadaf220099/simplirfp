import React from 'react';
import use from '../../assets/images/use.png';
import play from '../../assets/images/play.png';
import logo1 from '../../assets/images/log1.png';
import logo2 from '../../assets/images/logo2.png';
import Gov from '../../assets/images/gov.png';
import Tribe from '../../assets/images/tribe.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';
import Banner from '../../assets/vedios/Banner.mp4';

function Use() {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-10 w-full min-h-screen mb-10 overflow-hidden">
   
      <div className="text-center">
        <h1 className="font-bold text-[#1F2D5C] text-2xl sm:text-3xl md:text-4xl px-2">
          How To Use
        </h1>
        <h1 className="text-[#32C4C0] text-sm sm:text-base md:text-lg mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel
          venenatis eu sit massa volutpat.
        </h1>
      </div>

      <div className="flex justify-center items-center mt-8 sm:mt-10">
        <div className="relative inline-block w-full max-w-[1040px]">
          {/* <img src={use} alt="use" className="w-full h-auto rounded-xl" /> */}
          <video
                  className=" w-full h-auto object-cover"
                  src={Banner}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
          
          <img
            src={play}
            alt="play"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>
      </div>

     
      <div className="text-center mt-10 sm:mt-12">
        <h1 className="font-bold text-[#1F2D5C] text-2xl sm:text-3xl md:text-4xl px-2">
          Partners
        </h1>
        <h1 className="text-black text-sm sm:text-base md:text-lg mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel<br className="hidden sm:block" /> venenatis eu sit massa volutpat.
        </h1>
      </div>

      
      <div className="bg-[#DFDFDF] w-full mt-10 mb-10 py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-20 ">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-15">
          <img src={logo1} className="w-24 sm:w-32 md:w-70" alt="logo1" />
          <img src={logo2} className="w-24 sm:w-32 md:w-70" alt="logo2" />
          <div className="flex gap-4 sm:gap-8">
            <img src={Gov} className="w-20 sm:w-28 md:w-36" alt="Gov" />
            <img src={Tribe} className="w-20 sm:w-28 md:w-36" alt="Tribe" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-30 mt-10">
          <img src={logo4} className="w-24 sm:w-32 md:w-70" alt="logo4" />
          <img src={logo5} className="w-24 sm:w-32 md:w-70" alt="logo5" />
          <img src={logo6} className="w-24 sm:w-32 md:w-40" alt="logo6" />
        </div>
      </div>
    </div>
  );
}

export default Use;
