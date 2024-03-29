import React from "react";
import MovieReview from "../assets/portfolio/movie-app.png";
import RealEstate from "../assets/portfolio/real-estate.png";
import Figma from "../assets/portfolio/figma.png";
import PortfolioWeb from "../assets/portfolio/portfolio-javascript.png";
import Snake from "../assets/portfolio/snake-game.png";
import Gpt from "../assets/portfolio/gpt-3.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: MovieReview,
      code: "https://github.com/akm-engineer/final-mern-movie-review-app",
      demo: "https://movie-mern-review-app.netlify.app/",
      title: "Movie Review App",
    },
    {
      id: 2,
      src: RealEstate,
      code: "https://github.com/akm-engineer/mern-real-estate-client",
      demo: "https://drive.google.com/file/d/16tYbu9XvyScSlcd4LHBT3gzH9LtUmrV1/view?usp=sharing",
      title: "Bharat Real Estate",
    },
    {
      id: 3,
      src: Figma,
      code: "https://github.com/akm-engineer/digitalflake",
      demo: "https://youtu.be/N-NiD4iOQDQ",
      title: "Figma Implementation",
    },
    {
      id: 4,
      src: PortfolioWeb,
      code: "https://github.com/akm-engineer/Portfolio-website-1",
      demo: "https://akm-engineer.github.io/Portfolio-website-1/index.html",
      title: "Personal Website",
    },
    {
      id: 5,
      src: Snake,
      code: "https://github.com/akm-engineer/Snake-Game",
      demo: "https://akm-engineer.github.io/Snake-Game/",
      title: "Snake Game",
    },
    {
      id: 6,
      src: Gpt,
      code: "https://github.com/akm-engineer/gpt3-application",
      demo: "https://gpt-application.netlify.app/",
      title: "GPT-3 Application",
    },
  ];

  const redirectToDemo = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const redirectToCode = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my some work here</p>
        </div>
        <div className="mb-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, title, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-95 h-[180px] w-full object-cover"
              />
              <p className="text-center mt-4">{title}</p>
              <div className="flex justify-center items-center">
                <button
                  className="w-1/2 px-6 py-4  duration-200 hover:scale-105"
                  onClick={() => redirectToDemo(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-4  duration-200 hover:scale-105"
                  onClick={() => redirectToCode(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
