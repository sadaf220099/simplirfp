import React from 'react'
import secure1 from '../../assets/images/secure1.png'
import Secure2 from '../../assets/images/secure2.png'
import Button from '../../shared/Button'
import { Flex, Input } from 'antd';
import closeButton from '../../assets/images/CloseButton.png'
import { Icon } from '@iconify/react';

function Secure() {
  return (
    <section className=' Newsletter overflow-hidden'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-6  overflow-hidden '>
        <div className='space-y-24.5'>
          <div>
            <Button text="What Speciality" className="btn-Secure absolute mt-20 ml-20 py-4 mx-auto " />
            <h1 className="px-20 pt-33 text-3xl sm:text-4xl text-white font-bold">
              Stay <span className="text-[#32C4C0]">Informed</span> &{' '}
              <span className="text-[#32C4C0]">Secure</span> Your spot For{' '}
              <span className="text-[#32C4C0]">Updates</span>  Coming Soon.
            </h1>
            <h2 className='text-white px-20 pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Nihil, iste. Quam pariatur sunt recusandae optio, quibusdam vitae?</h2>
          </div>
          <div className="relative bg-white rounded-2xl w-full max-w-[621px] sm:w-[500px] md:w-[621px] h-auto px-4 sm:px-6 py-6 sm:py-8 mx-auto mt-6">
  <h1 className="text-[#32C4C0] font-bold text-lg sm:text-xl md:text-2xl text-center mt-2 sm:mt-3">
    Newsletter Module
  </h1>

  <p className="text-center text-xs sm:text-sm md:text-base py-2">
    Sign up to our newsletter to receive the latest updates
  </p>

  {/* Input field */}
  <div className="flex justify-center mt-2">
    <Input
      placeholder="Enter your email"
      className="w-full sm:w-[80%] mx-auto py-2 sm:py-3 text-sm sm:text-base"
    />
  </div>

  {/* Button */}
  <div className="flex justify-center mt-4">
    <Button
      text="SIGN UP"
      icon="material-symbols:mail-outline-rounded"
      width="24"
      height="24"
      className="btn-tertiary w-full sm:w-[400px] md:w-[541px] h-[45px] sm:h-[47px] py-3 sm:py-4 mx-auto text-sm sm:text-base"
    />
  </div>

  {/* Close button */}
  <img
    src={closeButton}
    alt="Close"
    className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-7 sm:w-8 h-7 sm:h-8 z-50 cursor-pointer"
  />
</div>


        </div>
        <img src={Secure2} alt="" />
      </div>

    </section>
  )
}

export default Secure
