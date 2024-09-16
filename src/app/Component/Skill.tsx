import React from "react";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { RiHtml5Line } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skill = () => {
  return (
    <div className="bg-gray-200" id="skill">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skill
            </h1>
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skills html */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <RiHtml5Line className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[100%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">100%</p>
              </div>
            </div>
            {/* skills css */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCss3 className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[70%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">70%</p>
              </div>
            </div>
            {/* skills TW */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <SiTailwindcss className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    TailWind CSS
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[80%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">80%</p>
              </div>
            </div>
            {/* skills js */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineJavaScript className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[75%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">75%</p>
              </div>
            </div>
            {/* skills ts */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <SiTypescript className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    TypeScript
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[80%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">80%</p>
              </div>
            </div>
            {/* skills next js */}
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <SiNextdotjs className="text-xl font-bold" />
                  </div>
                  <h4 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h4>
                </div>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute bg-blue-500 rounded-xl h-1 w-[40%]"></div>
                </div>
                <p className="text-bold text-blue-500 text-right">40%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;