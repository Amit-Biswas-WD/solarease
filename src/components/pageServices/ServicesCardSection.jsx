import cardImg from "@/resource/card-img.webp";
import ServicesCard from "@/components/Shared/ServicesCard";
import Link from "next/link";

const services = [
  {
    title: "Solar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: cardImg,
    link1: "#",
    link2: "#",
  },
  {
    title: "Wind Energy",
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    image: cardImg,
    link1: "#",
    link2: "#",
  },
  {
    title: "Hydropower",
    description: "Suspendisse potenti. Nullam id dolor id nibh ultricies.",
    image: cardImg,
    link1: "#",
    link2: "#",
  },
  {
    title: "Geothermal",
    description: "Mauris blandit aliquet elit, eget tincidunt nibh.",
    image: cardImg,
    link1: "#",
    link2: "#",
  },
];

export default function ServicesCardSection() {
  return (
    <section className="bg-gradient-to-r from-[#454E5D] to-[#717273] w-full text-se-white">
      <div className="py-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-6 max-w-5xl mx-auto">
          <h2 className="se-h2 ">Solar is our sport, our world stage.</h2>
          <p className="se-h6 se-my3-6 font-medium ">
            Years and years of practise and dedication, even when we were faced
            with adversity, when people told us it wasnt possible, we still
            showed up. We still put in the work. Some people will say we got
            lucky. Well tell em that luck is merely preparation meeting
            opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              cardImg={service.image}
              link1={service.link1}
              link2={service.link2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
