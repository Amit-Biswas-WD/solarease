"use client"; // Add this at the very top

import Link from "next/link";

export default function HomeBanner() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-se-white ring-1 ring-se-white hover:ring-se-primary transition-all duration-500">
              Quality, Personalized, Competitive{" "}
              <Link href="#" className="font-semibold text-yellow-500">
                <span aria-hidden="true" className="absolute " />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="shining-text">As Reliable As The Sun</h1>

            <p className="mt-8 text-lg font-medium text-se-white sm:text-xl shining-text2 weight-50">
              The most straightforward method of transitioning to sustainable
              energy is to directly harvest solar energy from the sun.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-full bg-se-primary px-6 py-2.5 text-sm font-semibold text-se-white shadow-sm hover:bg-se-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-se-secondary transition-all duration-500"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="rounded-full bg-se-white px-6 py-2.5 text-sm font-semibold text-se-primary hover:text-se-white shadow-sm hover:bg-se-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-se-secondary transition-all duration-500"
              >
                Learn more{" "}
                <span aria-hidden="true" className="text-yellow-500 sm:text-xl">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page-specific styles */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position-x: -500%;
          }
          100% {
            background-position-x: 500%;
          }
        }
        @keyframes shine2 {
          0% {
            background-size: 100% 100%;
          }
          0% {
            background-size: 100% 100%;
          }
        }

        .shining-text {
          color: #3b82f6;
          font-size: 3rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-family: "Hack", sans-serif;
          background: linear-gradient(90deg, #3b82f6, #fff, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-repeat: no-repeat;
          background-size: 80%;
          animation: shine 8s linear infinite;
          position: relative;
        }
        .shining-text2 {
          color: #fff;
          line-height: 1.5;
          display: inline;
          background-image: linear-gradient(
            transparent 50%,
            #e1fffe 50%,
            #b0f8ff 85%,
            transparent 85%,
            transparent 100%
          );
          background-repeat: no-repeat;
          background-size: 0% 100%;
          animation: shine2 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s
            forwards;
        }
      `}</style>
    </>
  );
}
