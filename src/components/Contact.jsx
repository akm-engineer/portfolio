import React from "react";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center  pb-5 gap-0 sm:gap-10 items-center">
          <div>
            <a
              href="tel:+919309518109"
              className="flex justify-center items-center gap-2 text-gray-400 "
            >
              <span className="text-white">
                <FaPhone />
              </span>{" "}
              +91-93095-18109
            </a>
          </div>
          <div>
            <a
              href="mailto:ashishgk1999@gmail.com"
              className="flex justify-center items-center gap-2 text-gray-400"
            >
              <span className="text-white">
                <SiGmail />
              </span>{" "}
              ashishgk1999@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            action="https://getform.io/f/wdLQMpej"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              className="p-2  focus:outline-none bg-transparent border-2 rounded-md text-white"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="my-4 p-2 focus:outline-none bg-transparent border-2 rounded-md text-white"
            />
            <textarea
              rows={"10"}
              placeholder="Enter your Message"
              name="message"
              className="p-2 focus:outline-none bg-transparent border-2 rounded-md text-white"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 flex items-center px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
