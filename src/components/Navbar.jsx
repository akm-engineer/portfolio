import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const link = [
  {
    id: 1,
    item: "home",
  },
  {
    id: 2,
    item: "about",
  },
  {
    id: 3,
    item: "portfolio",
  },
  {
    id: 4,
    item: "skills",
  },
  {
    id: 5,
    item: "contact",
  },
];
const socialLinks = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={50} />
      </>
    ),
    href: "https://www.linkedin.com/in/work-ashish/",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={50} />
      </>
    ),
    href: "https://github.com/akm-engineer",
  },
  {
    id: 3,
    child: (
      <>
        <HiOutlineMail size={50} />
      </>
    ),
    href: "mailto:ashishgk1999@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        <BsFillPersonLinesFill size={50} />
      </>
    ),
    href: "/Ashish_Kumar_Mishra_Resume.pdf",

    download: true,
  },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" w-full h-20 flex justify-between items-center bg-gradient-to-r from-black to-gray-800 fixed">
      <div>
        <h1 className="font-signature text-5xl ml-2 text-white capitalize hover:text-gray-700 hover:scale-110 duration-500 cursor-pointer">
          Ashish
        </h1>
      </div>
      <ul className="hidden md:flex">
        {link.map(({ id, item }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer hover:scale-105 duration-200 capitalize text-gray-400"
          >
            <Link to={item} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-white md:hidden pr-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {link.map(({ id, item }) => (
            <li
              key={id}
              className="text-3xl py-6 px-4 cursor-pointer hover:scale-105 duration-200 capitalize text-gray-600"
            >
              <Link
                onClick={() => setNav(false)}
                to={item}
                smooth
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <ul className="flex flex-row justify-around px-4 mt-4">
              {socialLinks.map(({ id, child, href, download }) => (
                <li key={id} className={"flex flex-row  items-center px-6    "}>
                  <a
                    href={href}
                    download={download}
                    className="text-gray-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
