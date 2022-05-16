import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#456268] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Container*/}
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#CE6262]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, I'm Nasr! Nice to meet you, please make yourself
              comfortable
            </p>
          </div>
          <div>
            <p>
              I am a full-stack developer in Detroit, Michigan. I love to build
              and design beautiful websites and applications. My favorite things
              in the world are my beautiful wife, web design and
              <strong>
                <i> of course </i>
              </strong>
              coffee ☕️.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
