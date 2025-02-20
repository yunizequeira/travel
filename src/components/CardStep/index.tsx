import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  step: {
    name: string;
    icon: string;
    description: string;
    color: string;
  };
}

const CardStep = ({ step }: Props) => {
  return (
    <div className={`${poppins.className} flex gap-2 max-w-md`}>
      <div
        className={`${step.color} rounded-xl p-4 flex justify-center items-center lg:h-14 h-12
          `}
      >
        <Image
          src={step.icon}
          alt="hero"
          width={50}
          height={50}
          className="h-full w-12 lg:w-14"
        />
      </div>
      <div className="space-y-2 px-2 lg:px-5">
        <h2 className=" text-slate-700 font-bold">
          {step.name}
        </h2>
        <p className="text-slate-500 text-sm lg:text-base">{step.description}</p>
      </div>
    </div>
  );
};

export default CardStep;
