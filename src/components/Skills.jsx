import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#456268] text-white">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#CE6262]">
            Skills
          </p>
          <p className="py-4">
            -/ These are the technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className=" ">
            <img className="w-[126px] mt-4 mx-auto" src={html} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" ">
            <img className="w-[120px] mt-4 mx-auto" src={css} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" ">
            <img
              className="w-[112px] mt-4 mx-auto"
              src={javascript}
              alt="javascript"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="justify-center flex flex-col">
            <img className="w-20 mt-4 mx-auto " src={react} alt="react" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="justify-center flex flex-col">
            <img className="w-[143px] mt-4 mx-auto" src={node} alt="node" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className=" ">
            <img className="w-[105px] mt-4 mx-auto" src={mongo} alt="mongo" />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
