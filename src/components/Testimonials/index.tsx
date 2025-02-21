"use client";
import Image from "next/image";
import TestimonialsCard from "../TestimonialCard";
import Tittle from "../Tittle/index";
import { useEffect, useState } from "react";

const TestimoialsArray = [
  {
    images: "/img/testimonial/author.png",
    name: "Mike taylor",
    country: "Lahore, Pakistan",
    testimonio:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    images: "/img/testimonial/author2.png",
    name: "Thomas Wagon",
    country: "CEO of Red Button",
    testimonio:
      "Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable",
  },
  {
    images: "/img/testimonial/author3.png",
    name: "Kelly Willium",
    country: "Khulna, Bangladesh",
    testimonio:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
];

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState<number>(0);
  const moveRight = () => {
    if (testimonial < TestimoialsArray.length - 1) {
      setTestimonial(testimonial + 1);
    } else {
      setTestimonial(0);
    }
  };

  const moveLeft = () => {
    if (testimonial > 0) {
      setTestimonial(testimonial - 1);
    } else {
      setTestimonial(TestimoialsArray.length - 1);
    }
  };

  useEffect(() => {
    const interval = () =>
      setTimeout(() => {
        if (testimonial < TestimoialsArray.length - 1) {
          setTestimonial(testimonial + 1);
        } else {
          setTestimonial(0);
        }
      }, 20000);

    interval();
  }, [testimonial]);

  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
      <div className="lg:px-5 max-w-md">
        <Tittle
          tittle="What Our Clients Say about Us."
          subtittle="testimonials"
        />
        <div className="flex justify-center lg:justify-start gap-5 py-5">
          <div
            className={`${
              testimonial === 0
                ? "h-3 w-3 rounded-full bg-slate-700 cursor-pointer"
                : "h-3 w-3 rounded-full bg-slate-400 cursor-pointer"
            }`}
            onClick={() => setTestimonial(0)}
          ></div>
          <div
            className={`${
              testimonial === 1
                ? "h-3 w-3 rounded-full bg-slate-700 cursor-pointer"
                : "h-3 w-3 rounded-full bg-slate-400 cursor-pointer"
            }`}
            onClick={() => setTestimonial(1)}
          ></div>
          <div
            className={`${
              testimonial === 2
                ? "h-3 w-3 rounded-full bg-slate-700 cursor-pointer"
                : "h-3 w-3 rounded-full bg-slate-400 cursor-pointer"
            }`}
            onClick={() => setTestimonial(2)}
          ></div>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center">
        <div className="lg:min-h-64 min-h-80 w-full max-w-xl bg-white relative shadow-lg rounded-lg">
          <TestimonialsCard testimonioObject={TestimoialsArray[testimonial]} />
        </div>
        <div className="px-2 flex py-5 flex-row-reverse md:block">
          <div className="md:p-1 px-5 py-5 bg-slate-100 cursor-pointer rounded-r-lg md:rounded-none" onClick={moveRight}>
            <Image
              src="/img/icons/up.svg"
              alt="hero"
              width={10}
              height={10}
              className="w-5 h-5 object-contain rotate-90 md:rotate-0"
            />
          </div>
          <div className="md:p-1 px-5 py-5 bg-slate-100 cursor-pointer rounded-l-lg md:rounded-none" onClick={moveLeft}>
            <Image
              src="/img/icons/down.svg"
              alt="hero"
              width={10}
              height={10}
              className="w-5 h-5 object-contain rotate-90 md:rotate-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
