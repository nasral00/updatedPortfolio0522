import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col justify-center items-center bg-[#456268] w-full h-screen"
    >
      <div className="pb-8 max-w-[1000px] p-4 w-full">
        <p className="text-4xl font-bold inline border-b-4 border-[#CE6262] text-white">
          Contact
        </p>
        <p className="text-white py-4">
          -/ Submit the form below or send me an email - n.almansoob1@gmail.com
        </p>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/e277e760-c2b6-4127-a7cc-1f257c711b35"
        className="flex flex-col justify-center items-center min-w-[400px] px-8 md:max-w-[600px] w-full  "
      >
        <div className="flex flex-col max-w-[500px] w-full shadow-custom bg-[#ce6262] items-center py-3">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="py-2 px-4 bg-transparent text-[#f5e021] placeholder-[#f5e021] w-9/12  border-b-4 border-[#f5e021] "
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="py-2 px-4 bg-transparent text-[#f5e021] placeholder-[#f5e021] w-9/12  border-b-4 border-[#f5e021] "
          />
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            className="py-2 px-4 mb-5 bg-transparent text-[#f5e021] placeholder-[#f5e021] w-9/12  border-b-4 border-[#f5e021] "
            rows={10}
          />
        </div>
        <button className="text-white border-2 hover:bg-[#ce6262] hover:border-[#f5e021] px-4 py-3 mt-16 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
