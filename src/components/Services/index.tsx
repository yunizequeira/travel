import Image from "next/image";
import Tittle from "../Tittle";
import CardServices from "../CardServices";

const services = [
  {
    icon: "/img/category/icon1.png",
    name: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: "/img/category/icon2.png",
    name: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: "/img/category/icon3.png",
    name: "Local Events",
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    icon: "/img/category/icon4.png",
    name: "Customization",
    text: "We deliver outsourced aviation services for military customers ",
  },
];

const Services = () => {
  return (
    <div className="px-5">
      <div className="relative lg:mt-10">
        <div className="flex justify-center p-5">
          <Tittle tittle="We Offer Best Services" subtittle="category" center />
        </div>
        <div className="hidden lg:block absolute top-0 right-0 max-w-[200px] overflow-hidden p-5">
          <Image
            src="/img/category/shape.svg"
            alt="hero"
            width={200}
            height={200}
            className="w-[200px] h-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {services.map((service) => (
          <CardServices
            icon={service.icon}
            title={service.name}
            text={service.text}
            key={service.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
