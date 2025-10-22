import React from 'react'
import Input from '../../shared/Input'
import section2 from '../../assets/images/section2.png'
import CategoriesCard from './CategoriesCard'
import Button from '../../shared/Button'
import { Icon } from '@iconify/react';

function Categories() {
  return (
    <section>
      <div
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section2})` }}
      >
        {/* Input Centered */}
        {/* <div className="absolute left-0 right-0 -top-2 z-[50] flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <Input className="w-full max-w-[500px]" />
        </div> */}

        {/* Categories Cards */}
        <div className="relative z-40 flex flex-wrap justify-center gap-6 
                        px-4 sm:px-8 md:px-12 lg:px-20 
                        py-16 sm:py-20 md:py-24 
                        mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <CategoriesCard frontText="Construction Services" icon={<Icon icon="emojione-monotone:construction-worker" width="64" height="64" />} number="895" />
          <CategoriesCard frontText="Rebuilding Installation" icon={<Icon icon="emojione-monotone:hammer-and-wrench" width="64" height="64" />} number="732" />
          <CategoriesCard frontText="Electrical Electronics" icon={<Icon icon="emojione-monotone:high-voltage" width="64" height="64" />} number="318" />
          <CategoriesCard frontText="Admin Management" icon={<Icon icon="eos-icons:admin" width="64" height="64" />} number="585" />
        </div>

        {/* Button Section */}
        <div className="relative z-40 flex justify-center pb-16">
          <Button
            text="More Categories"
            className="btn-tertiary w-[150px] sm:w-[180px] md:w-[200px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
