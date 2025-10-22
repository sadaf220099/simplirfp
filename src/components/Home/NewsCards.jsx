import React from "react";
import Image from "../../assets/images/Image.png";
import Button from "../../shared/Button";

export const NewsCards = ({ username, userdetail, image, buttonText, Images }) => {
    return (
        <div className="!bg-white shadow-md mt-5 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500">

            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={image}
                    alt="main"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-5"
                />
                <img
                    src={Images}
                    alt="overlay"
                    className="absolute inset-0 w-full p-4 h-full object-cover transform -translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0"
                />
            </div>
            <div className="p-3">
                <h5 className="font-bold rounded-xl p-2 w-fit bg-[#4B6BFB0D] text-[#4B6BFB]">
                    {username}
                </h5>

                <img src={Image} alt="icon" className="mt-2" />

                <h6 className="font-bold text-2xl mt-2">{userdetail}</h6>
            </div>
            <div className="flex justify-center mt-6 mb-6">
                <Button text={buttonText || "Read More"} className="btn-news w-[308px]" />
            </div>
        </div>
    );
};
