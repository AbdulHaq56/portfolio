import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project" className="bg-gray-200">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem] cursor-pointer">
            <div className="lg:w-1/3 sm:w-1/2 p-8">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assects/project/clonefb.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Facebook Clone
                  </h4>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Login & Signup Page
                  </h2>
                  <p className="leading-relaxed line-clamp-2">
                    This is Facebook Login and signup page. This is my first
                    project made with only Html and css for only PC.
                  </p>
                  <Link
                  target="_blank"
                  href={"https://facebook-sign-in-up-page.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project....
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-8">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assects/project/comingsoon.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Coming Soon
                  </h4>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Coming Soon
                  </h2>
                  <p className="leading-relaxed line-clamp-2">
                  Stay tuned for my Upcoming projects. Built with Next jS, React and other new Technologies.
                  </p>
                  <Link href={"#"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project....
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-8">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assects/project/comingsoon.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    New Project
                  </h4>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Coming Soon
                  </h2>
                  <p className="leading-relaxed line-clamp-2">
                  Stay tuned for my Upcoming projects. Built with Next jS, React and other new Technologies.

                  </p>
                  <Link href={"#"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
