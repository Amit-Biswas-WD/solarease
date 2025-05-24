import Image from "next/image";
import Link from "next/link"; // Ensure you have Link imported
import logo from "@/resource/logo.webp";

const footerData = {
  usefulLinks: [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About Us",
      url: "#",
    },
    {
      name: "Why Solar Ease",
      url: "#",
    },
    {
      name: "Projects",
      url: "#",
    },
    {
      name: "Special Packages",
      url: "#",
    },
    {
      name: "Customer Care",
      url: "#",
    },
  ],
  solutions: [
    {
      name: "Residential",
      url: "#",
    },
    {
      name: "Commercial",
      url: "#",
    },
    {
      name: "Maintenance",
      url: "#",
    },
  ],
  products: [
    {
      name: "Panels",
      url: "#",
    },
    {
      name: "Inverter",
      url: "#",
    },
    {
      name: "Battery Storage",
      url: "#",
    },
    {
      name: "EV Chargers",
      url: "#",
    },
  ],
  copyright: "SolarEase",
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
          {/* Company Details */}
          <div className="md:col-span-2 pb-20 md:pb-0">
            <Link href="#" className="-m-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={logo}
                alt="Your Company Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </Link>
            <p className="pr-4 md:pr-10 lg:pr-20  text-gray-400 se-p">
              SolarEase brings you cutting-edge tool to manage your renewable
              energy projects and streamline your inventory with ease. Get
              Started. Inventory Management
            </p>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="se-h4">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              {footerData.usefulLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="se-h4">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {footerData.solutions.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="se-h4">Connect</h3>
            <ul className="mt-4 space-y-2">
              {footerData.products.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white se-p"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 se-p">
            &copy; {new Date().getFullYear()} {footerData.copyright}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
