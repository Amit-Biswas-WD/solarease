import Banner from "@/components/Shared/Banner";
import BannerOverlay from "@/components/Shared/BannerOverlay";
import Navbar from "@/components/header/Navbar";
import ServicesCardSection from "@/components/pageServices/ServicesCardSection";
import LearnMoreSection from "@/components/Shared/LearnMoreSection";
import solar from "@/resource/solar5.webp";

const servicesData = {
  banner: {
    title: "Clean energy for your business",
    description:
      "The most straightforward method of transitioning to sustainable energy is to directly harvest solar energy from the sun.",
  },
  learn: {
    image: "#",
    title:
      "Learn more about the power of Solar Energy at the PSC Learning Centre",
    button: "Visit our Learning Centre",
    link: "#",
  },
};

export default function Services() {
  return (
    <>
      <div
        className="relative bg-white h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${solar.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BannerOverlay />
        <Navbar />
        <Banner data={servicesData.banner} />
      </div>
      <ServicesCardSection />
      <LearnMoreSection data={servicesData.learn} />
    </>
  );
}
