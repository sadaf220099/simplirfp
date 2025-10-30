import React from 'react'
import logo from '.././assets/images/logo.png'
import socialmedia from '.././assets/images/socialmedia.png'

function Footer() {
  return (
    <div className="bg-footer w-full py-10 px-6 md:px-16 overflow-hidden">
     
      <div className=' mx-auto'>
        <img src={logo} alt="Logo" className="mx-auto md:mx-0 mb-4 w-28 md:w-32" />
        <div className="flex flex-col sm:flex-row justify-between items-center md:items-start gap-10 text-white text-center md:text-left">
          <div className="max-w-sm">
            <h2 className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. A vitae posuere
              libero condimentum. Ipsum pulvinar pretium lacus sed volutpat.
              Montes sit odio amet lacus viverra. Tellus rhoncus tristique arcu dolor.
            </h2>
          </div>

          <div className="flex  justify-center sm:justify-between gap-8 md:gap-16 !font-[poppins]">
            <div className='!text-base    '>
              <p  className=''>About Us</p>
              <p>Pricing</p>
              <p>Features</p>
            </div>

            <div>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Blog</p>
            </div>

            <div>
              <p>Privacy Policy</p>
              <p>Why Us</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="max-w-xs">
            <h2 className="font-semibold text-center mb-3">Social Media Links</h2>
            <img src={socialmedia} alt="Social Media" className="mx-auto md:mx-0 w-[338px] md:w-[348px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
