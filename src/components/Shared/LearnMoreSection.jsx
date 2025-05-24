import BannerOverlay from "./BannerOverlay";
import Link from "next/link";

import solar from "@/resource/solar3.jpg";

export default function LearnMoreSection({ data }) {
  return (
    <>
      {/* Services Learn More Section  Content */}
      <div
        className="relative bg-white h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${solar.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BannerOverlay />
        {/* Banner Content */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="mx-auto max-w-3xl ">
            <div className="text-center">
              <h2 className="se-h2 text-se-white">{data.title}</h2>

              {/* Divider - Centered horizontally */}
              <div className="h-[2px] w-full mt-10 bg-se-white group-hover:bg-se-secondary mb-4 transition-all duration-300"></div>

              {/* Buttons with Full Width */}
              <div className="text-center mt-10">
                <Link href="#" className="se-button-primary text-center">
                  {data.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
