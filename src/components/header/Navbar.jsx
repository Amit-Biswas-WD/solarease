"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import logo from "@/resource/logo.webp";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  { name: "LEARNING CENTRE", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white ${
        isScrolled ? "bg-black" : "bg-[#00000020]"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-2 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={logo}
              alt="Your Company Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end transition-all duration-300">
          <Link
            href="tel:0480308226"
            className="flex items-center justify-between w-32 rounded-full bg-se-primary px-3 py-2 text-sm font-semibold text-se-white shadow-sm hover:bg-se-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-se-secondary transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PhoneIcon className="h-4 w-4 text-se-white" aria-hidden="true" />
            <span className="">
              {isHovered ? "Click to call" : "0480308226"}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-90">
          <div className="flex justify-between items-center p-4">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                src={logo}
                alt="Your Company Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4 text-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-light text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
