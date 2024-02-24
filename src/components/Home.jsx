import React from "react";
import heroImage from "../assets/hero-image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-center px-4 flex-col md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 max-w-md py-4">
            Welcome to our MERN Stack Shindig! 🚀 Where MongoDB, Express.js,
            React.js, and Node.js come together for a digital fiesta! From
            MongoDB merriment to React.js razzle-dazzle, we're here to make web
            development a laugh riot. So, grab your code editor and join the fun
            - let's turn pixels into party animals! 🎉
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 gap-4"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt=""
            className="rounded-2xl w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
