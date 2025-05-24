import BannerOverlay from "../Shared/BannerOverlay";
import Link from "next/link";

export default function CommercialWesternSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#454E5D] to-[#717273] w-full text-se-white h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* Text Section */}
          <div className="relative isolate px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            <div className="">
              <h2 className="se-h2 text-se-white">
                Elevate Your Business with Commercial Solar Solutions
              </h2>

              {/* Divider - Centered horizontally */}
              <div className="h-[2px] w-full mt-6 bg-se-white group-hover:bg-se-secondary mb-4 transition-all duration-300"></div>

              <p className="se-h6 se-my3-6 font-medium ">
                Elevate your business with commercial solar panels, the
                cornerstone of sustainable energy solutions. Not only do they
                boost your company's sustainability efforts, but they also
                effectively cut operational costs, offering a significant return
                on investment. By showcasing your commitment to renewable
                energy, you not only reduce your carbon footprint but also
                enhance your brand reputation as a responsible corporate
                citizen.
              </p>

              {/* Buttons with Full Width */}
              <div className=" mt-10">
                <Link href="#" className="se-button-primary text-center">
                  Visit our Learning Centre
                </Link>
              </div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="flex justify-center items-center p-6">
            <div className="w-full max-w-2xl">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/u_ZqC3dqWhA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
