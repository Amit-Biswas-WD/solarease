import Navbar from "@/components/header/Navbar";
import BannerOverlay from "@/components/Shared/BannerOverlay";
import HomeBanner from "@/components/pageHome/HomeBanner";
import HomeOurServices from "@/components/pageHome/HomeOurServices";
import HomeOurProduct from "@/components/pageHome/HomeOurProduct";

import solar from "@/resource/solar.webp";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <div
        style={{
          background: " linear-gradient(90deg, #4b4949, #3a4254, #151a23)",
        }}
      >
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
          <HomeBanner />
        </div>
        <HomeOurServices />
        {/* <HomeOurProduct /> */}
        <Footer />
      </div>
      </>)}
