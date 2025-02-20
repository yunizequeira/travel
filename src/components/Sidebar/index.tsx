"use client";
import { useEffect, useState } from "react";
import { options } from "../Navbar";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500", "700"],
});

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("navbar")?.classList.add("bg-white");
    }else{
      document.getElementById("navbar")?.classList.remove("bg-white");
    }
  }, [isOpen]);
  return (
    <div
      className="col-span-1 flex justify-end items-center cursor-pointer h-full relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="border border-slate-400 h-10 w-12 rounded p-2 overflow-hidden grid grid-rows-3 gap-1">
        <div className="bg-slate-700"></div>
        <div className="bg-slate-700"></div>
        <div className="bg-slate-700"></div>
      </div>

      {isOpen && (
        <div className="fixed top-24 right-0 w-full h-full bg-white container mx-auto ">
          <div
            className={`bg-white px-5 ${poppins.className}`}
          >
            <div className="flex flex-col gap-5 border-t border-slate-400/15 py-5 font-medium px-5">
              {options.map((option) => (
                <Link
                  href={option.path}
                  key={option.label}
                  className="hover:text-orange-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {option.label}
                </Link>
              ))}
              <div className="border border-black py-2 px-4 rounded w-1/3">
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  Sing Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
