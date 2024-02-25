import React, { useEffect } from "react";
import heroImage from "../assets/hero-image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    // Initialize Typed instance
    const typed = new Typed(".typing-text", {
      strings: ["Full Stack", "Front-end", "Backend"],
      loop: true,
      typeSpeed: 150, // Adjust the speed as needed
      backSpeed: 75, // Adjust the speed as needed
      backDelay: 2000, // Delay before backspacing
    });

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-center px-4 flex-col md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-3/4 md:pr-8">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a <span className="typing-text text-blue-300"></span>{" "}
            <p className="py-3">Developer</p>
          </h2>
          <div className="text-gray-300 max-w-md">
            <p>
              Welcome to our MERN Stack Shindig! 🚀 Where MongoDB, Express.js,
              React.js, and Node.js come together for a digital fiesta! From
              MongoDB merriment to React.js razzle-dazzle, we're here to make
              web development a laugh riot. So, grab your code editor and join
              the fun - let's turn pixels into party animals! 🎉
            </p>
            <p>
              This paragraph and any other content below remains unaffected by
              the text animation.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className=" cursor-pointer group w-fit px-6 py-3 my-2 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 gap-4 text-white hover:scale-105 duration-300"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 md:flex md:items-center md:justify-center md:pl-8">
          <img src={heroImage} alt="" className="rounded-2xl w-48 md:w-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;
