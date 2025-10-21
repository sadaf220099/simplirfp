import React from 'react'
import section3 from '../../assets/images/section3.png'
import { TrendCards } from './TrendCards'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'

function Trends() {
  const cardsdata = [
    {
      icon: 'emojione-monotone:flag-for-canada',
      productname: 'Canadian Tenders',
      productdetail: '180 in last 24 hours',
      button: 'View More',
    },
    {
      icon: 'game-icons:usa-flag',
      productname: 'US Tenders',
      productdetail: '1631 in last 24 hours',
      button: 'View More',
    },
    {
      icon: 'fluent:inprivate-account-24-filled',
      productname: 'Private Constructions',
      productdetail: '47 in last 24 hours',
      button: 'View More',
    },
  ]

  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${section3})` }}
    >
      
      <div className="text-center mb-10 px-2">
        <h1 className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
          New opportunities every day for Canadian businesses just like yours
        </h1>
      </div>

     
      <div className="flex flex-col sm:flex-row flex-wrap justify-center  gap-6 md:gap-10">
        {cardsdata.map((card, index) => (
          <TrendCards
            key={index}
            icon={card.icon}
            productname={card.productname}
            productdetail={card.productdetail}
            button={card.button}
          />
        ))}
      </div>
    </div>
  )
}

export default Trends
