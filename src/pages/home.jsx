import React from 'react'

import Herosection from '../components/Home/Herosection'
import { Navbar } from '../shared/Navbar'
import Categories from '../components/Home/Categories'
import Ai from '../components/Home/Ai'
import Trends from '../components/Home/Trends'
import Features from '../components/Home/Features'
import Customers from '../components/Home/Customers'
import bottom2 from '../assets/images/bottom2.png'
import Use from '../components/Home/use'
import Pricing from '../components/Home/Pricing'
import News from '../components/Home/News'
import Footer from '../shared/Footer'

function home() {
  return (
    <div>
     <Navbar/>
      <Herosection/>
      <Categories/>
      <Ai/>
      <Trends/>
      <div className='relative'>
        <Features/>
        <img src={bottom2} className='absolute -left-20 top-10  ' />
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
