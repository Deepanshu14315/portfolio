import React from "react";
import { FaUniversity } from "react-icons/fa";
import kuklogo from "../assets/kuklogo.png";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h2 className="text-orange-500 underline text-2xl lg:text-3xl font-medium uppercase ">
        Education
      </h2>
      <div className="mt-2">
        <div className="flex items-center justify-center gap-2 ">
         <div className="lg:flex items-center justify-center mt-5">
         <img src={kuklogo} alt="kuklogo" className="mx-20 h-8 mr-2" />
          <h2 className="lg:text-xl font-medium lg:mr-2 tracking-wide">
            Bachelor of Science in
          </h2>
          <h2 className="lg:text-xl font-medium">Information technology</h2>
         </div>
        </div>
        <h3 className="flex items-center lg:text-xl justify-center font-medium mt-1">
          (<FaUniversity className="mr-2" /> Kurukshetra University)
        </h3>
        <p className="text-center font-semibold">2020-2023</p>
      </div>
    </div>
  );
};

export default Education;
