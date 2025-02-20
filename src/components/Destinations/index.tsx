import React from "react";
import Tittle from "../Tittle";
import CardDestination from "../CardDestination";
import Image from "next/image";

const destinations = [
  {
    place: "Rome , Italy",
    image: "/img/dest/dest1.jpg",
    price: "5.42 K",
    days: "10 days trip",
  },
  {
    place: "London , UK",
    image: "/img/dest/dest2.jpg",
    price: "4.2 K",
    days: "12 days trip",
  },
  {
    place: "Full Europe",
    image: "/img/dest/dest3.jpg",
    price: "15K",
    days: "28 days trip",
  },
];

const Destinations = () => {
  return (
    <div>
      <div className="">
        <Tittle tittle="Top Destinations" subtittle="top selling" center />
      </div>
      <div className="relative lg:px-5">
        <div className="hidden absolute bottom-0 right-0 overflow-hidden w-1/2 -z-10 lg:flex justify-end px-5">
          <Image
            src="/img/dest/shape.svg"
            alt="hero"
            width={200}
            height={200}
            className="w-auto h-[200px]"
          />
        </div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-5 z-20">
          {destinations.map((destination) => (
            <div key={destination.place} className="px-5 max-w-md mx-auto">
              <CardDestination destine={destination} key={destination.place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
