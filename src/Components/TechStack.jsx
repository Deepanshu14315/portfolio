import React from "react";
import { FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { RiBootstrapLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

const TechStack = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-orange-500 underline uppercase text-3xl lg:xtext-3xl font-medium ">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-8 mx-12 items-center justify-center mt-10 lg:gap-4 lg:gap-12">
          <FaHtml5 className="bg-orange-500 rounded text-xl p-[10px] duration-500 ease-in-out shadow-xl shadow-orange-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <IoLogoCss3 className="bg-[#2965f1] rounded text-xl p-[10px] duration-500 ease-in-out shadow-xl shadow-blue-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <RiBootstrapLine className="bg-[#8713F4] rounded p-[10px] text-xl duration-500 ease-in-out shadow-xl shadow-purple-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <RiTailwindCssFill className="bg-[#36B6F2] p-[10px] rounded text-xl duration-500 ease-in-out shadow-xl shadow-cyan-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <SiJavascript className="bg-[#EFD81D] rounded text-xl duration-500 ease-in-out shadow-xl shadow-yellow-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <FaReact className="bg-[#00D1F7] p-[10px] rounded text-xl duration-500 ease-in-out shadow-xl shadow-cyan-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <FaGitAlt className="bg-[#EB4D28] p-[10px] rounded text-xl duration-500 ease-in-out shadow-xl shadow-red-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
          <FiGithub className="bg-gray-900 p-[10px] rounded text-xl duration-500 ease-in-out shadow-xl shadow-gray-500/50 transition-all  cursor-pointer  hover:lg:-translate-y-5 text-6xl p-[2px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
