import cardImg from "@/resource/card-img2.webp";
import Card from "../Shared/ServiceCard";
import Link from "next/link";

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
    description: "Suspendisse potenti. Nullam id dolor id ultricies vehicula.",
    image: cardImg,
  },
  {
    title: "Geothermal",
    description: "Mauris blandit aliquet elit, eget tincidunt pulvinar a.",
    image: cardImg,
  },
];

export default function HomeOurProduct() {
  return (
    <section className="bg-gradient-to-r from-[#454E5D] to-[#717273] w-full text-se-white">
      <div className="py-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="se-h2">Our Products</h2>
          <h4 className="se-h3 mb-4 my-2 font-se-secondary">
            The best or nothing
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 ">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              cardImg={service.image}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="#" className="se-button-primary">
            See our quality product range
          </Link>
        </div>
      </div>
    </section>
  );
}
