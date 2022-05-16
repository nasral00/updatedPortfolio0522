import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div name="main" className="bg-[#456268] h-screen w-full">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6] md:px-1 ">My name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#fff] ">
          Nasr Almansoob &
        </h1>
        <h2 className="text-4xl md:text-7xl font-bold text-[#ce6262] animate-pulse duration-300">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#fff] py-4 max-w-[700px]"></p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#CE6262] hover:border-[#CE6262]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
