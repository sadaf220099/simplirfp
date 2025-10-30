import React from 'react'
import { ContractCards } from './contractCards'
import Img1 from '../../assets/images/img1.png'
import Img2 from '../../assets/images/img2.png'
import Img3 from '../../assets/images/img3.png'

function Contract() {
    const cardsdata = [
        {
            Image: Img1,
            productname: 'Optimize Procurement',
            productdetail: 'Concrete and effective result ',
        },
        {
            Image: Img3,
            productname: 'Improve Efficiency',
            productdetail: 'Concrete and effective result ',
        },
        {
            Image: Img2,
            productname: 'Optimize Procurement',
            productdetail: 'Concrete and effective result ',
        },
    ]

    return (
        <div className="relative w-full  overflow-hidden">
            {/* SVG Background */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1582"
                fill="none"
                className="w-full h-auto"
            >
                <path
                    d="M1050 421C1607.2 447.8 1862.5 151.5 1920.5 0V1022C1761 1133 1593.6 1289 1050 1235C506.4 1181 123.5 1502.83 0 1581.5V634.5C117.833 552.167 492.8 394.2 1050 421Z"
                    fill="url(#paint0_linear_71_1757)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_71_1757"
                        x1="0"
                        y1="790.75"
                        x2="1920.5"
                        y2="790.75"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#32C4C0" />
                        <stop offset="1" stopColor="#1F2D5C" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
                    The most complete source of<br className="hidden sm:block" />
                    contract opportunities for suppliers in Canada.
                </h1>

                <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10 w-full max-w-[1200px]">
                    {cardsdata.map((card, index) => (
                        <div key={index} className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex justify-center">
                            <ContractCards
                                Image={card.Image}
                                productname={card.productname}
                                productdetail={card.productdetail}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contract
