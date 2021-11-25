import Button from "./Button";
import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Social from "./Social";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import cls from "classnames";
import Toggle from "./Toggle";

const Navigation = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <>
      {/* Toggle */}
      <div className="fixed w-full h-24 md:hidden top-0 left-0 bg-white dark:bg-gray-900 z-50">
        <div className="flex items-center justify-between px-10 h-24">
          <p className="font-primary text-gray-500 dark:text-gray-300 text-lg ">
            My Portfolio
          </p>
          <div className="flex items-center space-x-4">
            <Toggle />
            <button
              className=""
              type="button"
              onClick={() => setIsNavHidden((prev) => !prev)}
            >
              {isNavHidden ? (
                <AiOutlineMenu className="text-gray-400" size={20} />
              ) : (
                <AiOutlineClose className="text-gray-400" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={cls(
            `flex rounded-bl-lg bg-white dark:bg-gray-900  w-2/3 p-4 justify-end ml-auto flex-col space-y-4 items-start`,
            { hidden: isNavHidden }
          )}
        >
          <Button href="#home">Home</Button>
          <Button href="#work">Work</Button>
          <Button href="#blog">Blog</Button>
          <Button href="#about">About</Button>
          <Button href="#contact">Contact</Button>
        </div>
      </div>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex md:items-center md:justify-between md:sticky top-0 h-20 bg-white dark:bg-gray-900 z-50`}
      >
        <div className="md:flex flex-col space-y-2 items-start md:flex-row md:space-y-0 md:items-center md:space-x-2 lg:space-x-4">
          <Button href="#">Home</Button>
          <Button href="#work">Work</Button>
          <Button href="#blog">Blog</Button>
          <Button href="#about">About</Button>
          <Button href="#contact">Contact</Button>
        </div>
        <div className="hidden md:flex items-center md:flex-row md:space-y-0">
          <Social />
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default Navigation;
