"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import VideoComponnt from "../VideoComponent";
import Wrapper from "../VideoComponent/Wrapper";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Banner = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (isShow) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isShow]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex justify-end -z-10 ">
        <Image
          src={"/img/hero/hero-bg.svg"}
          alt="hero"
          width={500}
          height={500}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="top-0 left-0 w-full mt-40 z-10 ">
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:w-1/2 flex justify-end items-center ">
            <div className=" space-y-4 max-w-2xl px-5">
              <p
                className={`text-red-400 font-bold text-[1.2rem] text-center md:text-start ${poppins.className}`}
              >
                Best Destinations around the world
              </p>
              <h1 className="text-5xl/tight text-center lg:text-start lg:text-[5rem]/tight font-bold text-blue-950 ">
                Travel, enjoy and live a new and full life
              </h1>
              <p
                className={`text-lg text-center lg:text-start max-w-xl text-slate-500 ${poppins.className}`}
              >
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="py-5 flex flex-col md:flex-row justify-center lg:justify-start gap-5">
                <div className="flex justify-center">
                  <button className="bg-orange-400 text-white py-3 px-8 rounded ">
                    Find out more
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="text-lg text-slate-400 flex justify-center items-center gap-2"
                    onClick={() => setIsShow(true)}
                  >
                    <div className="rounded-full h-12 w-12 flex justify-center items-center bg-red-400 p-2">
                      <Image
                        src={"/img/hero/play.svg"}
                        alt="play"
                        width={30}
                        height={30}
                        className="h-5 w-auto"
                      />
                    </div>
                    Play Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/img/hero/hero-img.png"}
              alt="hero"
              width={760}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div>
        {isShow && (
          <Wrapper setShow={setIsShow}>
            <VideoComponnt />
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export default Banner;
