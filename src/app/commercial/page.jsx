import Banner from "@/components/Shared/Banner";
import BannerOverlay from "@/components/Shared/BannerOverlay";
import Navbar from "@/components/header/Navbar";
import CommercialWesternSection from "@/components/pageCommercial/CommercialWesternSection";
import ServicesCardSection from "@/components/pageServices/ServicesCardSection";
import ServicesLearnMoreSection from "@/components/Shared/LearnMoreSection";
import solar from "@/resource/solar5.webp";
import LearnMoreSection from "@/components/Shared/LearnMoreSection";

const servicesData = {
  banner: {
    title: "Clean energy for your business",
    description: "Improve your bottom line and reduce your carbon footprint.",
  },
  learn: {
    title:
      "Learn more about Commercial Solar Energy Solutions at the PSC Academy",
    button: "Visit our Academy",
    link: "#",
  },
};

export default function Commercial() {
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
      <CommercialWesternSection />
      <LearnMoreSection data={servicesData.learn} />
    </>
  );
}
