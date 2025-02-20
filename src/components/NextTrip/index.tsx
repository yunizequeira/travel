import React from "react";
import Tittle from "../Tittle";
import CardStep from "../CardStep";
import CardNextStep from "../CardNextStep";

const steps = [
  {
    name: "Choose Destination",
    icon: "/img/steps/selection.svg",
    description:
      "Choose your favourite place. No matter where you travel inside the World.",
    color: "bg-orange-400",
  },
  {
    name: "Make Payment",
    icon: "/img/steps/water-sport.svg",
    description:
      "After find your perfect spot, make your payment and get ready to travel.",
    color: "bg-red-400",
  },
  {
    name: "Reach Airport on Selected Date",
    icon: "/img/steps/taxi.svg",
    description:
      "Lastly, you have to arrive at the airport on time and enjoy the vacation.",
    color: "bg-[#006380]",
  },
];

const NextTrip = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-10">
      <div className="lg:px-10 px-5">
        <div>
          <Tittle
            tittle="Book your next trip in 3 easy steps"
            subtittle="Easy and Fast "
          />
        </div>
        <div className="space-y-10 py-10 ">
          {steps.map((step) => (
            <CardStep step={step} key={step.name} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-radial from-10% to-80% from-blue-400/50 bg-top to-white min-h-96 px-4 lg:px-20 py-20 max-w-xl mx-auto">
          <CardNextStep />
      </div>
    </div>
  );
};

export default NextTrip;
