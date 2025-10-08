import React, { useState } from "react";
import { Drawer } from "antd";
import logo from "../assets/images/logo.png";
import Button from "../components/Home/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-1 right-0 left-0 z-50 shadow-md cursor-pointer">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-16">
         
          <div>
            <img src={logo} alt="Logo" width={271} height={63} />
          </div>

          <div className="flex justify-between items-center gap-20 h-16">
         
            <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-16">
              <a href="#about" className="text-white hover:text-blue-500">
                Features
              </a>
              <a href="#features" className="text-white hover:text-blue-500">
                Pricing
              </a>
              <a href="#how" className="text-white hover:text-blue-500">
                Why Us
              </a>
              <a href="#contact" className="text-white hover:text-blue-500">
                Blogs
              </a>
            </div>

          
            <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
              <h2 className="text-white text-sm lg:text-base xl:text-lg">
                Get A Demo
              </h2>
              <Button text="Login/SignUp" className="btn-secondary w-[174px]" />
            </div>
            <div className="md:hidden text-white">
              <Button
                text="Menu"
                className="btn-secondary w-[100px]"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

     
      <Drawer
        title={
          <div className="flex justify-between  items-center">
            <span className="font-bold text-lg text-[black]">Menu</span>
          </div>
        }
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        bodyStyle={{ padding: "20px" }}
      >
        <ul className="flex flex-col  space-y-4">
          <li>
            <a href="#about" className="text-black" onClick={() => setIsOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#features" className="text-black" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#how" className="text-black" onClick={() => setIsOpen(false)}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black" onClick={() => setIsOpen(false)}>
              Blogs
            </a>
          </li>
        </ul>

        <div className="flex flex-col items-center space-y-3 mt-6">
          <h2 className="text-black">Get A Demo</h2>
          <Button
            text="Login/Signup"
            className="btn-secondary w-full "
            onClick={() => setIsOpen(false)}
          />
        </div>
      </Drawer>
    </nav>
  );
};
