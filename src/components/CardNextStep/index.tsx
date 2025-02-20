import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const CardNextStep = () => {
  return (
    <div className="bg-white w-full min-h-96 p-5 rounded-3xl z-10 shadow-md shadow-blue-400/10">
      <Image
        src="/img/steps/booking-img.jpg"
        alt="hero"
        width={500}
        height={500}
        className="w-full h-44 rounded-3xl"
      />
      <div className={`space-y-3 py-5 ${poppins.className}`}>
        <h5 className={`capitalize text-slate-700 font-medium text-xl`}>
          Trip to Grece
        </h5>
        <p className="capitalize text-slate-700 font-medium">
          14-29 June | by Robbin joseph
        </p>
        <div className="flex gap-5 items-center">
          <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full p-2">
            <Image
              src="/img/steps/leaf.svg"
              alt="hero"
              width={50}
              height={50}
              className="w-4 h-4 "
            />
          </div>
          <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full p-2">
            <Image
              src="/img/steps/map.svg"
              alt="hero"
              width={50}
              height={50}
              className="w-4 h-4 "
            />
          </div>
          <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full p-2">
            <Image
              src="/img/steps/send.svg"
              alt="hero"
              width={50}
              height={50}
              className="w-4 h-4 "
            />
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex gap-2">
            <Image
              src="/img/steps/building.svg"
              alt="hero"
              width={50}
              height={50}
              className="w-5 h-5"
            />
            <p className="capitalize text-slate-500 font-medium text-sm">
              24 people going
            </p>
          </div>
          <div>
            <Image
              src="/img/steps/heart.svg"
              alt="hero"
              width={50}
              height={50}
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNextStep;
