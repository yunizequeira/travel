import Image from "next/image";
import {Poppins} from 'next/font/google'

interface Props {
  destine: {
    place: string;
    image: string;
    price: string;
    days: string;
  };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","700"],
})

const CardDestination = ({ destine }: Props) => {
  return (
    <div className={`rounded-3xl shadow-2xl ${poppins.className} z-20 bg-white cursor-pointer`}>
      <Image
        src={destine.image}
        alt="hero"
        width={600}
        height={540}
        className="rounded-t-3xl"
      />
      <div className="space-y-3 py-5">
        <div className="w-full px-5  flex justify-between items-center flex-wrap">
          <h2 className="text-[1.25rem] text-slate-700 font-medium">{destine.place}</h2>
          <p className="text-slate-700 ">${destine.price}</p>
        </div>
        <div className="px-5 flex items-center gap-5 ">
          <Image
            src={"/img/dest/navigation.svg"}
            alt="navigation icon"
            width={50}
            height={50}
            className="w-auto h-[20px] object-contain"
          />
          <p className="text-slate-500 capitalize font-medium">{destine.days}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDestination;
