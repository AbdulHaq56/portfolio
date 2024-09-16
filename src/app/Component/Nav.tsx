"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-blue-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
            <Image
              src="/Assects/Pictures/Logo.jpeg" // Use absolute path for public directory
              alt="Logo"
              height={100}
              width={100}
              className="w-[55px] rounded-full"
              style={{ borderRadius: "50%", overflow: "hidden" }}
            />
            <span className="ml-3 text-xl">Abdul-Haq</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="inline-flex p-3 hover:bg-blue-200 rounded lg:hidden text-blue-600 ml-auto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:ml-auto md:mr-auto flex flex-col md:flex-row md:space-x-5 items-center text-base lg:flex lg:space-x-5 lg:flex-row`}
          >
            <Link
              href="/"
              className="active:text-black mr-0 group text-blue-600 transition duration-300"
            >
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800" />
            </Link>
            <Link
              href="#about"
              className="active:text-black my-2 md:my-0 group text-blue-600 transition duration-300"
            >
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800" />
            </Link>
            <Link
              href="#skill"
              className="active:text-black my-2 md:my-0 group text-blue-600 transition duration-300"
            >
              Skills
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800" />
            </Link>
            <Link
              href="#project"
              className="active:text-black my-2 md:my-0 group text-blue-600 transition duration-300"
            >
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800" />
            </Link>
            <Link
              href="#Contact"
              className="active:text-black my-2 md:my-0 group text-blue-600 transition duration-300"
            >
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800" />
            </Link>
          </nav>
          <Link
            href="/Assects/MyCV/myCv.pdf.pdf"
            className="py-2.5 px-6 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
            download
          >
            Download CV
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
