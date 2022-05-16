import React from "react";
import three0 from "../assets/three0.png";
import whattheweather from "../assets/whattheweather.svg";
import dynazen from "../assets/dynazen.jpeg";
import unsplash from "../assets/stockimagescraper.jpg";
import allscores from "../assets/allscores.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#456268]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#CE6262]">
            Work
          </p>
          <p className="py-6">-/ Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${three0})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div !bg-top"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                three.0
              </span>
              <p>Web 3.0 application</p>
              <div className="pt-8 text-center">
                <a
                  href="https://sweet-gumdrop-7e5d4d.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-2 py-1 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/nasral00/three.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-2 py-1 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${whattheweather})` }}
            className="container flex items-center justify-center mx-auto rounded-md group content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                What The Weather
              </span>
              <p>Weather application</p>
              <div className="pt-8 text-center">
                <a
                  href="https://affectionate-jackson-900bca.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/nasral00/whattheweather"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${dynazen})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div !bg-top"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                DynaZen Chrome Extension
              </span>
              <p>Chrome extension for Zendesk</p>
              <div className="pt-8 text-center">
                <a
                  href="https://chrome.google.com/webstore/detail/dynazen/aoabncienijpafafljbfoagiaclfkkln?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/nasral00/dynazen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${unsplash})` }}
            className="container flex items-center justify-center mx-auto rounded-md group content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Stock Image Scraper
              </span>
              <p>Downloads multiple stock images rapidly</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${allscores})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div !bg-center"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                All Sports App
              </span>
              <p>Sports scores app for NBA, NHL, NFL, MLB</p>
              <div className="pt-8 text-center">
                <a
                  href="https://fanciful-dolphin-f1ca1e.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/nasral00/allscoresapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
