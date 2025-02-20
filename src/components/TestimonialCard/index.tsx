import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  testimonioObject: {
    name: string;
    country: string;
    images: string;
    testimonio: string;
  };
}

const TestimonialsCard = ({ testimonioObject }: Props) => {
  return (
    <div
      className={`absolute -top-10 lg:-left-10 -left-0 w-full h-full lg:min-h-64 min-h-80 bg-white shadow-xl rounded-lg max-w-xl ${poppins.className}  py-2`}
    >
      <div className="w-full relative py-8 px-2">
        <figure className="absolute -top-5 -left-5">
          <Image
            src={testimonioObject.images}
            width={100}
            height={100}
            alt="author"
            className="w-16 h-16 rounded-full"
          />
        </figure>
        <div className="p-5 font-medium text-slate-500">
          {testimonioObject.testimonio}
        </div>
        <div
          className="p-5 space-y-2"
        >
          <h5 className="text-slate-700 font-semibold">
            {testimonioObject.name}
          </h5>
          <p className="text-slate-500 font-medium">{testimonioObject.country}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
