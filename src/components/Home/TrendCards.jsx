import React from 'react'
import Button from '../../shared/Button'
import { Icon } from '@iconify/react'

export const TrendCards = ({ productname, productdetail, icon, button }) => {
    return (
        <div className="w-[446px] h-[317px] p-10 mt-24 border border-white/40 bg-[#FFFFFF2E] rounded-2xl shadow-lg group cursor-pointer">
            <h2 className="text-xl font-bold text-center text-[#1F2D5C] transition-colors duration-700 group-hover:text-red-600">
                {productname}
            </h2>
            <Icon icon={icon} className="w-30 h-30 mx-auto p-3 transition-transform duration-700 group-hover:text-red-600" />
            <p className="text-md text-[#1F2D5C] text-center px-2 py-3 transition-colors duration-700 group-hover:text-red-600">
                {productdetail}
            </p>
            <div className="flex justify-center">
                <Button
                    className="btn-hover w-[131px] text-[#1F2D5C] transition-colors duration-700 group-hover:text-red-600"
                    text={button}
                />
            </div>
        </div>
    )
}
