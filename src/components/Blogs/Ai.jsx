import React from 'react'
import building from '../../assets/images/building.png'
import Button from '../../shared/Button'
import post from '../../assets/images/post.png'
import AFi from '../../assets/images/AFi.png'
import map from '../../assets/images/map.png'
import ellipse1 from '../../assets/images/ellipse1.png'
import Ellipse2 from '../../assets/images/Ellipse2.png'
import bottom5 from '../../assets/images/bottom5.png'
import bottom6 from '../../assets/images/bottom6.png'   

function Ai() {
    return (
        <section className="bg-white relative z-10 min-h-screen pt-[127px] flex flex-col lg:flex-row justify-center px-6 sm:px-10 lg:px-20 xl:px-32 2xl:px-40">
            <>
                <img
                    src={bottom5}
                    alt="Decoration"
                    className="absolute top-0 left-0 z-0 w-[100px] sm:w-[160px] md:w-[200px]"
                />

                <div className="flex flex-col lg:flex-row gap-30 xl:gap-20 z-10">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2">
                        <img src={building} alt="Building" className='md:w-[853px] md:h-[727px]' />
                        <div className='flex flex-wrap gap-2 py-3'>
                            <Button text="Construction" className="btn-Ai w-[117px] h-[36px]" />
                            <Button text="Building" className="btn-Ai w-[84px] h-[36px]" />
                            <Button text="Men Power" className="btn-Ai w-[117px] h-[36px]" />
                        </div>

                        <h1 className='text-black font-semibold py-4 text-[60px] sm:text-3xl md:text-4xl lg:text-5xl'>
                            The trick to getting more
                            done is to have the freedom
                            to roam around
                        </h1>

                        <p className='text-black text-sm sm:text-base md:text-lg py-10 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur. Ultrices pharetra faucibus faucibus
                            ultricies neque velit elementum Hac eu at ornare diam tempor phasellus amet.
                            In posuere felis id aliquet ut eu dignissim tincidunt. Sed maecenas est et nunc
                            viverra in pellentesque. Semper nulla tempor nulla in consequat varius
                            elementum sed hac. Adipiscing diam pretium dui cras malesuada.
                            Neque egestas lorem tincidunt in.In posuere felis id aliquet ut eu dignissim tincidunt.
                        </p>

                        <div className='flex flex-wrap items-center pt-5 gap-3'>
                            <img src={ellipse1} className='w-[70px] sm:w-[80px] lg:w-[90px] h-[70px] sm:h-[80px] lg:h-[90px]' />
                            <img src={Ellipse2} className='w-[70px] sm:w-[80px] lg:w-[90px] h-[70px] sm:h-[80px] lg:h-[90px]' />
                            <h2 className='text-[#707070] text-xs sm:text-sm md:text-base'>
                                by Breana Flatley & Damian Erdman<br />
                                October 7, 2022 ∙ 4 min read
                            </h2>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2">
                        <div className='flex flex-col gap-6 sm:gap-9'>
                            <img src={post} className='w-[535px] h-[350px]' />
                            <img src={AFi} className='w-[535px] h-[350px]' />
                        </div>
                        <div className='flex flex-wrap gap-2 py-2'>
                            <Button text="Idea" className="btn-Ai w-[84px] h-[36px]" />
                            <Button text="Artificial Intelligence" className="btn-Ai w-[156px] h-[36px]" />
                        </div>

                        <h1 className='text-black font-semibold text-[40px] sm:text-3xl lg:text-4xl'>
                            Ai can solve new problems<br />
                            very easily
                        </h1>
                        <h2 className='text-[#707070] py-1 text-sm sm:text-base'>by Daryl Whener</h2>

                        <img src={map} alt="" className='w-[535px] h-[335px] py-3' />

                        <div className='flex flex-wrap gap-2'>
                            <Button text="Business" className="btn-Ai w-[84px] h-[36px]" />
                            <Button text="Tender Value" className="btn-Ai w-[156px] h-[36px]" />
                        </div>

                        <h1 className='text-black font-semibold py-2 text-[40px] sm:text-3xl lg:text-4xl'>
                            Now day biding on tender<br />
                            is more easy. is it ?
                        </h1>
                        <h2 className='text-[#707070] text-sm sm:text-base'>by Damian Erdman</h2>
                    </div>
                </div>

                {/* Bottom Decoration */}
                <img
                    src={bottom6}
                    alt="Decoration"
                    className="absolute top-175 right-0 z-0 w-[100px] sm:w-[160px] md:w-[200px]"
                />
            </>
        </section>
    )
}

export default Ai
