import React from 'react'
import Input from './Input'
import section2 from '../../assets/images/section2.png'
import CategoriesCard from './CategoriesCard'
import Button from './Button'
import { Icon } from '@iconify/react';

function Categories() {
  return (
    <section>
      <div
        className="relative  w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section2})` }}
      >
       <div className="absolute left-0 right-0 -top-1 z-[50] flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <Input />
        </div> 

        <div className="relative z-40 flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-20 mt-10 sm:mt-18 lg:mt-26">
          <CategoriesCard frontText="Construction Services" icon={<Icon icon="emojione-monotone:construction-worker" width="64" height="64" />} number="895" />
          <CategoriesCard frontText="Rebuilding Installation" icon={<Icon icon="emojione-monotone:hammer-and-wrench" width="64" height="64" />} number="732" />
          <CategoriesCard frontText="Electrical Electronics" icon={<Icon icon="emojione-monotone:high-voltage" width="64" height="64" />} number="318" />
          <CategoriesCard frontText="Admin Management" icon={<Icon icon="eos-icons:admin" width="64" height="64" />} number="585" />
        </div>

        <div className="relative z-40 flex justify-center pb-16">
          <Button
            text="More Categories"
            className="btn-tertiary  w-[180px] sm:w-[200px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
