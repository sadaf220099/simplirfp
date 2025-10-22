import React, { useState } from "react";
import { Drawer } from "antd";
import logo from "../assets/images/logo.png";
import Button from "./Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-7 right-0 left-0 z-50 cursor-pointer">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-16">
          <div>
            <img src={logo} alt="Logo" width={271} height={63} />
          </div>

          <div className="flex justify-between items-center gap-20 h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-16">
              {[
                { label: "Features", href: "#about" },
                { label: "Pricing", href: "#features" },
                { label: "Why Us", href: "#how" },
                { label: "Blogs", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    relative text-white hover:text-blue-400 transition-colors duration-300
                    after:content-[''] after:absolute after:left-1/2 after:bottom-0
                    after:w-0 hover:after:w-full after:h-[2px]
                    after:bg-blue-400 after:transition-all after:duration-300
                    after:-translate-x-1/2
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
              <h2 className="text-white text-sm lg:text-base xl:text-lg">
                Get A Demo
              </h2>
              <Button text="Login/SignUp" className="btn-secondary w-[174px]" />
            </div>

            {/* Mobile Menu Button */}
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

      {/* Drawer for Mobile */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-[black]">Menu</span>
          </div>
        }
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        bodyStyle={{ padding: "20px" }}
      >
        <ul className="flex flex-col space-y-4">
          {[
            { label: "Features", href: "#about" },
            { label: "Pricing", href: "#features" },
            { label: "Why Us", href: "#how" },
            { label: "Blogs", href: "#contact" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-black hover:text-blue-500 underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center space-y-3 mt-6">
          <h2 className="text-black">Get A Demo</h2>
          <Button
            text="Login/Signup"
            className="btn-secondary w-full"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </Drawer>
    </nav>
  );
};
