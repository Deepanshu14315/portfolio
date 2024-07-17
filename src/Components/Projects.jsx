import React from "react";
import foodieflick from "../assets/foodieflick.png";
import dribbble from "../assets/dribbble.png";
import spotify from "../assets/spotify.png";
import { RiExternalLinkFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="mt-12">
      <h2 className="text-orange-500 text-center underline text-2xl lg:text-3xl font-medium uppercase ">
        Projects
      </h2>
      <div className="m-12 flex flex-wrap  items-center justify-center gap-12  ">
        <div className="w-[332px] border-2 transition-all duration-500 ease-in-out shadow-xl shadow-orange-500/50 border-orange-300  p-4 rounded hover:-translate-y-5">
          <div className="h-44 bg-green-300 w-full p-1">
            <img
              src={foodieflick}
              alt=""
              className="h-full w-full object-fill "
            />
          </div>
          <h2 className="font-bold text-2xl text-grey-600 mt-3">
            Foodie Flick
          </h2>
          <p className="text-gray-600 mt-2">
            Created a online ordering food website with react.js. Utilize React
            Router Dom for Dynamic Routing and for cart Feature using Redux
            ToolKit. and MAke it responsive as well.
          </p>
          <div className="flex gap-7 mt-4">
            <button className="font-semibold rounded-md px-5 py-2  text-lg bg-orange-500 text-white flex items-center justify-center">
              <RiExternalLinkFill className="mr-1 text-xl" /> Live
            </button>
            <button className="hover:-translate-y-4 font-semibold rounded-md px-3 py-2 lg:px-5 lg:py-3 lg:text-lg bg-fuchsia-500  text-white">
              Github
            </button>
          </div>
        </div>

        <div className="w-[332px] border-2 transition-all duration-500 ease-in-out shadow-xl shadow-orange-500/50 border-orange-300  p-4 rounded hover:-translate-y-4">
          <div className="h-44 bg-green-300 w-full p-1">
            <img src={dribbble} alt="" className="h-full w-full object-fill " />
          </div>
          <h2 className="font-bold text-2xl text-grey-600 mt-3">
            Dribbble clone
          </h2>
          <p className="text-gray-600 mt-2">
            Created a dribble clone website with HTML,Css , Javascript. Utilize
            Router Dom for Dynamic Routing and for cart Feature using Redux
            ToolKit. and make it responsive as well.
          </p>
          <div className="flex gap-7 mt-4">
            <button className="font-semibold rounded-md px-5 py-2  text-lg bg-orange-500 text-white flex items-center justify-center">
              <RiExternalLinkFill className="mr-1 text-xl" /> Live
            </button>
            <button className=" font-semibold rounded-md px-3 py-2 lg:px-5 lg:py-3 lg:text-lg bg-fuchsia-500  text-white">
              Github
            </button>
          </div>
        </div>

        <div className="w-[332px] border-2 transition-all duration-500 ease-in-out shadow-xl shadow-orange-500/50 border-orange-300  p-4 rounded hover:-translate-y-4">
          <div className="h-44 bg-green-300 w-full p-1">
            <img src={spotify} alt="" className="h-full w-full object-fill " />
          </div>
          <h2 className="font-bold text-2xl text-grey-600 mt-3">
            Spotify Clone
          </h2>
          <p className="text-gray-600 mt-2">
            Created a online ordering food website with react.js. Utilize React
            Router Dom for Dynamic Routing and for cart Feature using Redux
            ToolKit. and MAke it responsive as well.
          </p>
          <div className="flex gap-7 mt-4">
            <button className="font-semibold rounded-md px-5 py-2  text-lg bg-orange-500 text-white flex items-center justify-center">
              <RiExternalLinkFill className="mr-1 text-xl" /> Live
            </button>
            <button className=" font-semibold rounded-md px-3 py-2 lg:px-5 lg:py-3 lg:text-lg bg-fuchsia-500  text-white">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
