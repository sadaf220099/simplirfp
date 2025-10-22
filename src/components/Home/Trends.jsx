import React from 'react'
import section3 from '../../assets/images/section3.png'
import { TrendCards } from './TrendCards'
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
    <section>
    <div
  className="relative w-full bg-cover bg-center py-12 px-4 sm:px-8 md:px-12 lg:px-20 min-h-[60vh]"
  style={{ backgroundImage: `url(${section3})` }}
>

      <div className="text-center mb-3 px-2">
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
    </section>
  )
}

export default Trends
