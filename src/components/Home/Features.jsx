import React from 'react';
import line1 from '../../assets/images/line1.png';
import features from '../../assets/images/features.png';
import mask1 from '../../assets/images/mask1.png';
import Button from './Button';
import Group21 from '../../assets/images/Group21.png'

function Features() {
  return (
    <div className="bg-white p-4 sm:p-10 w-full h-auto mb-20 overflow-hidden relative">
     
      <div className="flex justify-center flex-wrap text-center">
        <h1 className="font-bold text-black text-xl sm:text-2xl px-2">
          Features &
        </h1>
        <h1 className="font-bold text-[#32C4C0] text-xl sm:text-2xl">
          Benefits
        </h1>
      </div>

   
      <div className="flex flex-col cursor-pointer lg:flex-row justify-evenly items-center mt-10 gap-10">
        
        <div className="flex flex-col sm:flex-row items-start">
          <img src={line1} alt="Line" className="hidden sm:block w-8 sm:w-10" />
          <div className="p-4 sm:p-8 space-y-3 sm:space-y-6 text-center sm:text-left">
            <h1 className="font-bold">Sorting of contracts</h1>
            <h1>User limit</h1>
            <h1>Free trial</h1>
            <h1>Bookmark</h1>
            <h1>Reminder email</h1>
            <h1>Automatic billing</h1>
            <h1>Ability to switch</h1>
            <h1>Ability to switch</h1>
          </div>
        </div>

        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex justify-center">
          <img
            src={features}
            alt="Features"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      
      <div
  className="relative flex flex-col justify-center items-center mt-4 rounded-lg text-center sm:text-left"
  style={{
    backgroundImage: `url(${mask1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: 200,
  }}
>
 
  <div className="p-6 sm:p-10">
    <h1 className="font-bold text-white text-center text-lg sm:text-xl md:text-2xl">
      Thousands of business opportunities at your fingertips
    </h1>
  </div>
  
  <div className="absolute -bottom-18 right-6">
    <img src={Group21} />
  </div>
</div>

    </div>
  );
}

export default Features;
