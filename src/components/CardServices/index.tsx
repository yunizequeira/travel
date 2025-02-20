"use client";
import Image from "next/image";
import { useState } from "react";

import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","700"],
})
const CardServices = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => {
  const [isOnHover, setIsOnHover] = useState(false);

  return (
    <div
      className={
        `rounded-3xl bg-white p-5 hover:shadow-2xl transition duration-300 relative flex flex-col justify-center items-center space-y-3 max-w-[320px] mx-auto cursor-pointer ${poppins.className}`
      }
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={icon}
          alt="hero"
          width={100}
          height={100}
          className="w-[75px] h-auto object-contain"
        />
        <h2 className="text-[1.25rem] text-slate-700">{title}</h2>
      </div>
      <div className="text-slate-500 text-center">
        <p>{text}</p>
      </div>

      <div
        className={
          isOnHover
            ? "hidden  absolute -left-5 -bottom-5 w-[6.25rem] h-[6.25rem] bg-orange-700  lg:flex justify-center items-center rounded-br-lg rounded-tl-3xl -z-10"
            : "hidden  absolute left-1 bottom-1 w-[6.25rem] h-[6.25rem] bg-orange-700  lg:flex justify-center items-center rounded-br-lg rounded-tl-3xl -z-10 "
        }
      ></div>
    </div>
  );
};

export default CardServices;
