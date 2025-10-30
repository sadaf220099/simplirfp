import React from 'react'
import { Navbar } from '../shared/Navbar'
import Herosection from '../components/Blogs/Herosection'
  import Ai from '../components/Blogs/Ai'
import Secure from '../components/Blogs/Secure'
import Team from '../components/Blogs/Team'

import Read from '../components/Blogs/Read'
import Contract from '../components/Blogs/Contract'
import Footer from '../shared/Footer'

function Blogs() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Ai/>
<Contract/>
<Read/>
    <Secure/>
    <Team/>
    <Footer/>
    </div>
  )
}

export default Blogs
