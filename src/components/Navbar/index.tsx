"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const options = [
  {
    label: "Services",
    path: "/#services",
  },
  {
    label: "Destinations",
    path: "/#destinations",
  },
  {
    label: "Booking",
    path: "/#booking",
  },
  {
    label: "Testimonials",
    path: "/#testimonials",
  },
  {
    label: "Login",
    path: "/login",
  },
];
const Navbar = () => {
  const path = usePathname();

  useEffect(() => {
    if (path === "/login" || path === "/register") {
      document.getElementById("navbar")?.classList.add("bg-white");
    }else{
      document.getElementById("navbar")?.classList.remove("bg-white");
    }
  }, [path]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-10 backdrop-blur-md"
      id="navbar"
    >
      <div className="py-8 grid grid-cols-2 lg:grid-cols-4 container mx-auto ">
        <Link href={"/"}>
          <figure>
            <Image
              src="/img/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-24 h-auto"
            />
          </figure>
        </Link>

        <div className="col-span-3 lg:flex justify-evenly items-center gap-10  text-lg px-10 hidden">
          {options.map((option) => (
            <Link
              href={option.path}
              key={option.label}
              className="hover:text-orange-300 transition-colors duration-300"
            >
              {option.label}
            </Link>
          ))}
          <div className="border border-black py-2 px-4 rounded">
            <Link href="/register">Sing Up</Link>
          </div>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
