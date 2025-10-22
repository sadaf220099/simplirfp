import React from 'react'
import Herosection from '../components/Home/Herosection'
import { Navbar } from '../shared/Navbar'
import Categories from '../components/Home/Categories'
import Ai from '../components/Home/Ai'
import Trends from '../components/Home/Trends'
import Features from '../components/Home/Features'
import Customers from '../components/Home/Customers'
import bottom2 from '../assets/images/bottom2.png'
import Use from '../components/Home/Use'
import Pricing from '../components/Home/Pricing'
import News from '../components/Home/News'
import Footer from '../shared/Footer'
import Input from '../shared/Input'

function home() {
  return (
    <div className='space-y-6'>
     <Navbar/>
      <Herosection/>
     <div className="absolute left-0 right-0 -bottom-12 z-[30] flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
     <Input className="w-[1040px] h-[92px] flex-shrink-0" />
        </div>
      <Categories/>
      <Ai/>
      <Trends/>
      <div className='relative'>
        <Features/>
        <img src={bottom2} className='absolute -left-20 top-25 z-0 ' />
      <Customers/>
      </div>
      <Use/>
      <Pricing/>
      <News/>
      <Footer/>
    </div>
  )
}
export default home
