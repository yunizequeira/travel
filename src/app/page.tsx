import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import NextTrip from "@/components/NextTrip";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="container mx-auto py-20 lg:px-5" id="services">
        <Services />
      </div>
      <div className="container mx-auto py-10 lg:px-5" id="destinations">
        <Destinations />
      </div>
      <div className="container mx-auto py-10 lg:px-5" id="booking">
        <NextTrip />
      </div>
      <div className="container mx-auto py-10 lg:px-5" id="testimonials">
        <Testimonials/>
      </div>
    </>
  );
}
