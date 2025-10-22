// import React from "react";
// const Button = ({ children, onClick, className, type = "button" }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className=    {`bg-amber-100 text-black px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { Icon } from "@iconify/react";


const Button = ({
  text,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt = "",
  icon,
  iconClass = "",
  type = "button",
  ariaLabel,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {loading ? (
        <Icon
          icon="line-md:loading-twotone-loop"
          className={`h-5 w-5 ${iconClass}`}
        />
      ) : (
        <>
          {icon && <Icon icon={icon} className={`h-5 w-5 ${iconClass}`} />}
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              className={`object-contain ${iconClass}`}
            />
          )}
          {text && <span>{text}</span>}
        </>
      )}
    </button>
  );
};

export default Button;