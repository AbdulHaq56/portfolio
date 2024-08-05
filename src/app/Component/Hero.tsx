"use client";
import Typewriter from "typewriter-effect";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-gray-200">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I Am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Software Engineer !", "Entrepreneur !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
              Hello I&apos;m Aspiring Software Engineer, I&apos;m Passionate About
              Artificial Inteligence And new Technologies<br />
              Hire Me for Modern Website Development.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="w-[400px]"
              alt="hero"
              src={require("../../../public/Assects/Pictures/myimg.jpeg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
