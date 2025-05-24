import cardImg from "@/resource/card-img.webp";

import Link from "next/link";
import ServiceCard from "@/components/Shared/ServiceCard";

const services = [
  {
    title: "Solar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: cardImg,
  },
  {
    title: "Wind Energy",
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    image: cardImg,
  },
  {
    title: "Hydropower",
    description: "Suspendisse potenti. Nullam id dolor id nibh ultricies.",
    image: cardImg,
  },
  {
    title: "Geothermal",
    description: "Mauris blandit aliquet elit, eget tincidunt nibh.",
    image: cardImg,
  },
];

export default function HomeOurServices() {
  return (
    <section className="py-10 max-w-screen-xl mx-auto ">
      <div className="text-center mb-3 mt-10">
        <h2 className="text-3xl font-bold text-se-white">
          Solar is our sport, our world stage.
        </h2>
      </div>
      <div className="text-center mb-10 flex justify-center">
        <div className="w-3/5" >
          <p className="  text-se-white  ">
            Years and years of practise and dedication, even when we were faced
            with adversity, when people told us it wasn’t possible, we still
            showed up. We still put in the work. Some people will say we got
            lucky. We’ll tell ‘em that luck is merely preparation meeting
            opportunity.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            cardImg={service.image}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="#"
          className="rounded-full bg-se-primary px-6 py-2.5 text-sm font-semibold text-se-white shadow-sm hover:bg-se-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-se-secondary transition-all duration-500"
        >
          How we can help you
        </Link>
      </div>
    </section>
  );
}
