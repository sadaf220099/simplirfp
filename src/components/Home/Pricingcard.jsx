import React from 'react'
import Button from './Button'
import { Icon } from '@iconify/react'
import titleIcon from '../../assets/images/titleIcon.png'

const PricingCard = ({ 
  title, 
  subtitle, 
  description, 
  icon,        
  price, 
  period, 
  features, 
  buttonText, 
  tag, 
  index 
}) => {
  const isGradientCard = index === 1

  return (
    <div
  className={`relative flex flex-col justify-between p-6 rounded-3xl shadow-lg transition-all duration-300 ${
    isGradientCard ? "text-white scale-165" : "bg-white text-gray-800"
  }`}
  style={
    isGradientCard
      ? {
          background: "linear-gradient(180deg, #32C4C0 0%, #1F2D5C 99.09%)",
          transform: "translateY(-25px)", // 👈 move upward
        }
      : {}
  }
>

      
      {tag && (
        <span
          className={`absolute top-4 right-4 ${
            isGradientCard
              ? "bg-gray-100 text-[#1F2D5C]"
              : "bg-[#1F2D5C] text-white"
          } text-xs font-bold w-fit px-3 py-1 rounded-lg shadow-xl`}
        >
          {tag}
        </span>
      )}

      <div className="flex flex-col items-start">
       
        <div className="mb-4">
          {icon ? (
            <img
              src={titleIcon}
              alt={`${title} icon`}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#32C4C0] to-[#1F2D5C]"></div>
          )}
        </div>
<div className='flex'>
    <img src={titleIcon} />
    
        <h3
          className={`text-sm font-semibold ${
            isGradientCard ? "text-white" : "text-gray-500"
          }`}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-xl mt-1 font-bold ${
            isGradientCard ? "text-gray-100" : "text-black"
          }`}
        >
          {subtitle}
        </p>
</div>
        {/* Description */}
        {description && (
          <p
            className={`mt-2 text-sm leading-relaxed ${
              isGradientCard ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

        {/* Price */}
        <div className="mt-4">
          <h2
            className={`text-4xl font-bold ${
              isGradientCard ? "text-white" : "text-black"
            }`}
          >
            {price}
            <span className="text-lg font-normal">/{period}</span>
          </h2>
        </div>

        {/* Features */}
        <h4
          className={`mt-4 font-semibold ${
            isGradientCard ? "text-white" : ""
          }`}
        >
          What's included
        </h4>
        <ul className="mt-3 space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  isGradientCard ? "bg-white" : "bg-black"
                }`}
              >
                <Icon
                  icon="material-symbols:check"
                  color={isGradientCard ? "#1F2D5C" : "white"}
                  width="14"
                  height="14"
                />
              </div>
              <span
                className={`${
                  isGradientCard ? "text-white" : "text-gray-800"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="flex justify-center mt-6">
        <Button
          text={buttonText || "Try for Free"}
          className="btn-tertiary w-[308px]"
        />
      </div>
    </div>
  )
}

export default PricingCard
