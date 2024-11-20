// components/header.js
"use client"; // Marking this component as a Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logoputih.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-48 h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/signin"
            className="text-lg text-white hover:text-custom-yellow transition duration-300"
          >
            Masuk
          </Link>
          <Link
            href="/signup"
            className="bg-custom-yellow hover:bg-yellow-500 text-lg px-6 py-2 rounded-lg text-white transition duration-300"
          >
            Daftar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="text-white focus:outline-none focus:ring-2 focus:ring-custom-yellow rounded"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/signin"
                className="text-lg text-white hover:text-custom-yellow transition duration-300"
              >
                Masuk
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="bg-custom-yellow hover:bg-yellow-500 text-lg px-6 py-2 rounded-lg text-white transition duration-300"
              >
                Daftar
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
