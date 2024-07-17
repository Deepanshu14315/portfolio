import React, { useEffect, useRef } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import ProfilePic from "../assets/ProfilePic.png";
import Typed from "typed.js";
import { LuMouse } from "react-icons/lu";

const Banner = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "React JS Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typeRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center flex-col text-center justify-center gap-3 lg:gap-4">
      <h2 className="text-3xl lg:text-5xl font-bold">Hi, 👋 </h2>
      <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500">
        <span className="text-3xl lg:text-5xl font-bold text-black">I am</span> Deepanshu
      </h2>
      <h2 className="text-2xl lg:text-4xl font-bold">
        <span ref={typeRef}></span>
      </h2>
      <div className="flex gap-7 mt-4">
        <button className="hover:-translate-y-4 font-semibold rounded-md px-3 py-2 lg:px-5 lg:py-3 lg:text-lg border-2 border-orange-500 hover:bg-orange-500 transition-all duration-500 ease-in-out shadow-xl shadow-orange-500/50 hover:text-white">
          Resume
        </button>
        <button className="hover:-translate-y-4 font-semibold rounded-md px-3 py-2 lg:px-5 lg:py-3 lg:text-lg border-2 border-fuchsia-500 hover:bg-fuchsia-500 transition-all duration-500 ease-in-out shadow-xl shadow-fuchsia-500/50 hover:text-white">
          Let's Talk
        </button>
      </div>
      <div className="flex items-center justify-around w-[70%] mt-10">
        <div className=" flex-col gap-4 hidden lg:flex">
          <a href="https://github.com/Deepanshu14315"><FiGithub className="bg-[#151413] rounded text-3xl p-[6px] text-white" /></a>
          <a href="https://www.linkedin.com/in/deepanshu14315"><FaLinkedinIn className="bg-[#0A66C2] rounded text-3xl p-[6px] text-white" /></a>
          <a href=""><FaWhatsapp className="bg-[#1AD03F] rounded text-3xl p-[6px] text-white" /></a>
          <a href="https://x.com/Deep_shrmaa"><RiTwitterXFill className="bg-[#0F1318] rounded text-3xl p-[6px] text-white" /></a>
        </div>
        <div className="h-72 lg:h-96 mt-10 overflow-hidden shadow-xl shadow-fuchsia-500/70 rounded-full lg:rounded-r-full">
          <img
            className="h-full w-full object-cover"
            src={ProfilePic}
            alt="Profile Pic"
          />
        </div>
        <div className="hidden lg:block">
          <LuMouse className="text-2xl animate-bounce mb-2"/>
          <p className="[writing-mode:vertical-rl] text-lg ">let's create the digital future</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
