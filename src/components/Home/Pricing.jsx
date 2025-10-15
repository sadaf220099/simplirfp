import React from 'react'
import { Switch } from 'antd'
import Button from './Button'
import { Icon } from '@iconify/react'
import titleIcon from '../../assets/images/titleIcon.png'
import titleIcon2 from '../../assets/images/titleIcon2.png'
import titleIcon3 from '../../assets/images/titleIcon3.png'

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
      className={`relative flex flex-col justify-between p-6 rounded-3xl shadow-lg transition-transform duration-300 ${
        isGradientCard ? "text-white scale-105" : "bg-white text-gray-800"
      }`}
      style={
        isGradientCard
          ? {
              background: "linear-gradient(180deg, #32C4C0 0%, #1F2D5C 99.09%)",
              transform: "translateY(-30px)",
              zIndex: 10, 
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
          } text-xs font-bold px-3 py-1 rounded-lg shadow-xl`}
        >
          {tag}
        </span>
      )}

      
      <div>
        <div className="flex items-center gap-3">
  <img
    src={icon}
    alt="icon"
    className="w-[72px] h-[72px]"
  />
  <div>
    <h3
      className={`text-sm font-semibold ${
        isGradientCard ? "text-white" : "text-gray-500"
      }`}
    >
      {title}
    </h3>

    <p
      className={`text-xl mt-1 font-bold ${
        isGradientCard ? "text-gray-100" : "text-black"
      }`}
    >
      {subtitle}
    </p>
  </div>
</div>


        {description && (
          <p
            className={`mt-2 text-sm leading-relaxed ${
              isGradientCard ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

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
    className={` ${
       isGradientCard ? "!bg-white text-black btn-primary w-[308px]" : "btn-tertiary w-[308px]"
    }`}
  />
</div>

    </div>
  )
}

function Pricing() {
  const plans = [
    {
      title: "For individuals",
      subtitle: "Free",
      icon: titleIcon,
      description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      price: "$99",
      period: "monthly",
      features: [
        "Access to all Request for Proposals (RFPs) nationwide.",
        "Limited summarization page covering ten out of thirty-one key points.",
        "Up to 3 team members.",
      ],
      buttonText: "Try for free",
      tag: null,
    },
    {
      title: "For startups",
      subtitle: "Plus",
      icon: titleIcon2,
      description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      price: "$199",
      period: "monthly",
      features: [
        "Price: $100 per month, no contract.",
        "Price: $80 per month billed annually ($720 total).",
        "Summarization of sixteen out of thirty-one key points.",
      ],
      buttonText: "Get started",
      tag: "Popular",
    },
    {
      title: "For big companies",
      subtitle: "Premium",
      icon: titleIcon3,
      description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
      price: "$399",
      period: "monthly",
      features: [
        "Price: $120 per month, no contract.",
        "Price: $80 per month billed annually ($960 total).",
        "Summarization of all thirty-one key points.",
        "Document locker included.",
        "Includes 1 RFP submission.",
      ],
      buttonText: "Get started",
      tag: null,
    },
    {
      title: "For big companies",
      subtitle: "Lifetime",
      icon: titleIcon3,
      description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      price: "$399",
      period: "monthly",
      features: [
        "Price: $6500 one-time payment.",
        "Summarization of all thirty-one key points.",
        "Document locker included.",
        "Includes 1 RFP submission.",
      ],
      buttonText: "Get started",
      tag: null,
    },
  ]

  return (
    <div className="bg-white p-5 w-full overflow-visible"> 
      <div className="text-center">
        <h1 className="font-bold text-[#170F49] text-3xl mb-2">
          Choose the best pricing
        </h1>
        <p className="text-[#6F6C90]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel
          <br />
          venenatis eu sit massa volutpat.
        </p>
      </div>

      
      <div className="flex justify-center items-center gap-6 mx-auto p-5">
        <h2>Monthly</h2>
        <Switch />
        <h2>Annually</h2>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20 mt-10 items-start">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} index={index} />
        ))}
      </div>

      <div className="font-bold flex justify-center p-10">
        <h2>See Pricing Plan</h2>
      </div>
    </div>
  )
}

export default Pricing
