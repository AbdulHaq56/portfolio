import React from "react";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-blue-600 body-font">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center">
          <a className="flex title-font font-medium items-center justify-center sm:justify-start text-blue-900 mb-4 sm:mb-0">
            <span className="text-xl">Abdul-Haq</span>
          </a>
          <p className="text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Abdul-Haq — Portfolio
          </p>
          <span className="inline-flex sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <Link
              target="_blank"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
              href="https://www.linkedin.com/in/abdul-haq56/"
            >
              <SiLinkedin className="text-2xl sm:text-3xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
