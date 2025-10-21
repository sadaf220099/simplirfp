import React from 'react'
import { NewsCards } from './NewsCards'
import Frame1 from '../../assets/images/Frame1.png'
import Frame2 from '../../assets/images/Frame2.png'
import Frame3 from '../../assets/images/Frame3.png'
import Frame30 from '../../assets/images/Frame30.png'
import Frame31 from '../../assets/images/Frame31.png'
import Frame32 from '../../assets/images/Frame32.png'
export const News = () => {
  const carddata = [
    {
      image: Frame1,
      username: "Technology",
      userdetail: "The Impact of Technology on the Workplace: How Technology is Changing",
      Images: Frame30,
    },
    {
      image: Frame2,
      username: "Technology",
      userdetail: "The Impact of Technology on the Workplace: How Technology is Changing",
      Images: Frame31,
    },
    {
      image: Frame3,
      username: "Technology",
      userdetail: "The Impact of Technology on the Workplace: How Technology is Changing",
      Images: Frame32,
    },
  ];

  return (
    <section>
    <div className="bg-white w-full h-auto mb-2 overflow-hidden px-4 sm:px-10 md:px-20 py-10">
      
      <h1 className="font-bold text-black text-center text-xl sm:text-2xl md:text-3xl px-2">
        Learn some new info from
      </h1>
      <div className="flex justify-center flex-wrap">
        <h1 className="font-bold text-black text-center text-xl sm:text-2xl md:text-3xl px-2">
          Our
        </h1>
        <h1 className="font-bold text-[#32C4C0] text-center text-xl sm:text-2xl md:text-3xl">
          latest News
        </h1>
      </div>

      <h1 className="text-[#6F6C90] text-center text-sm sm:text-base leading-relaxed mt-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel<br className="hidden sm:block" />
        venenatis eu sit massa volutpat.
      </h1>

      <div className="p-4 sm:p-10 flex flex-col md:flex-row mx-auto gap-8 justify-center items-center">
        {carddata.map((newscard, index) => (
          <NewsCards
            key={index}
            image={newscard.image}
            username={newscard.username}
            userdetail={newscard.userdetail}
            Images={newscard.Images}
          />
        ))}
      </div>
    </div>
    </section>
  )
}

export default News
