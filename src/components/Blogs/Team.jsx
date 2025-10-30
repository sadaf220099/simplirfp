import React from 'react'
import line2 from '../../assets/images/line2.png'
import { TeamCard } from './TeamCard'
import Sociallcon from '../../assets/images/Social.png'
import img1 from '../../assets/images/Group6.png'
import img2 from '../../assets/images/Group9.png'
import img3 from '../../assets/images/Group8.png'
import img4 from '../../assets/images/Group10.png'
import mask1 from '../../assets/images/mask1.png'

function Team() {
    const cardsdata = [
        {
            image: img1,
            productname: 'Scott Beer',
            producttitle: 'Insert your title here',
            productdetail: 'There are many variations of passages of Lorem Ipsum available',
            Image: Sociallcon,

        },
        {
            image: img2,
            productname: 'Ivanna Drian',
            producttitle: 'Insert your title here',
            productdetail: 'There are many variations of passages of Lorem Ipsum available',
            Image: Sociallcon,
        },
        {
            image: img3,
            productname: 'Miles Tales',
            producttitle: 'Insert your title here',
            productdetail: 'There are many variations of passages of Lorem Ipsum available',
            Image: Sociallcon,
        },
        {
            image: img4,
            productname: 'Pevinna Summer',
            producttitle: 'Insert your title here',
            productdetail: 'There are many variations of passages of Lorem Ipsum available',
            Image: Sociallcon,
        },
    ]
    return (
        <div className=' bg-white text-center min-h-[100vh] px-6 sm:px-10 lg:px-20 py-16'>
            <img src={line2} alt="" className='mx-auto' />
            <div className="text-center">
                <h1 className=" text-[#1F2D5C] text-xl  px-2">
                    EXPLORE PEOPLE
                </h1>
                <h1 className="px-20 text-3xl sm:text-4xl text-black font-bold">
                    Meet Our Dedicated <span className="text-[#32C4C0]">Team</span>
                </h1>
                <h1 className="text-[#6F6C90] text-sm sm:text-base md:text-lg mt-2 px-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel<br />
                    venenatis eu sit massa volutpat.
                </h1>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center  gap-3 md:gap-10">
                {cardsdata.map((card, index) => (
                  
                    <TeamCard
                        key={index}
                        Image={card.Image}
                        productname={card.productname}
                        productdetail={card.productdetail}
                        producttitle={card.producttitle}
                        image={card.image}
                    />
                  
                ))}
            </div>
            <div
  className="relative z-1 flex flex-col justify-center items-center mt-10 sm:mt-16 md:mt-20 rounded-lg text-center sm:text-left px-4 sm:px-8"
  style={{
    backgroundImage: `url(${mask1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: 189,
  }}
>
  <div className="space-y-10 sm:space-y-14 md:space-y-16 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center text-white rounded-xl py-8 sm:py-10 gap-6 sm:gap-10 md:gap-20 text-center md:text-left">
      
      <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-[43px] text-center md:text-left">
        Strength In Numbers
      </h1>

      <div className="mt-4 sm:mt-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">200,000+</p>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Local, National & <br /> international suppliers
        </h2>
      </div>

      <div className="mt-4 sm:mt-0">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">2,000+</p>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Buying organizations <br /> from across North America
        </h2>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default Team
