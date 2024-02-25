import React from "react";
import trekkingImage from "../assets/trekking.jpeg";
import kabaddiImage from "../assets/kabaddi.jpg";
import runningImage from "../assets/running.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black py-8 px-4 md:px-0 h-full "
    >
      <div className=" mx-auto max-w-screen-lg h-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-400 text-center mb-6">
          Welcome to my corner of the digital realm! I'm a MERN Stack aficionado
          with a penchant for adventure and a love for all things code. When I'm
          not immersed in the world of web development, you'll often find me
          chasing adrenaline rushes and embracing the great outdoors.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-1">
            <img
              src={trekkingImage}
              alt="Trekking"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-2">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Trekking
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left">
              Strap on your boots and join me as we traverse rugged terrains and
              conquer majestic peaks! Trekking isn't just a hobby for me - it's
              a way of life. Whether I'm exploring lush forests or scaling
              mountain passes, there's a sense of freedom and discovery that
              only the great outdoors can offer.
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-2">
            <img
              src={kabaddiImage}
              alt="Kabaddi"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-1">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Kabaddi and Handball
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left">
              Game on! When I'm not coding, I'm channeling my competitive spirit
              on the kabaddi and handball courts. From intense showdowns to
              strategic maneuvers, these sports fuel my passion for teamwork,
              discipline, and pushing my limits. So, who's up for a match?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-20">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-1">
            <img
              src={runningImage}
              alt="Running"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-2">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Running
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left ">
              Pounding pavements, chasing dreams! Lace up your shoes and hit the
              ground running with me. Whether it's a leisurely jog through city
              streets or a challenging trail run in the wilderness, every step
              is a testament to resilience and determination. Join me as we
              embrace the rhythm of the run and unleash our inner road warriors!
              🏃‍♂️💨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
