import React from "react";
import {
  RiCss3Fill,
  RiGatsbyFill,
  RiHtml5Fill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiDjango,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import Button from "../Button";

const About = () => {
  return (
    <div>
      <p className="font-secondary font-light md:text-center lg:text-lg text-gray-500 mb-20">
        Here's the following skill that i'm familiar with.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 place-items-center gap-y-20">
        <RiHtml5Fill className="text-gray-500 text-7xl md:text-8xl" />
        <RiCss3Fill className="text-gray-500 text-7xl md:text-8xl" />
        <SiJavascript className="text-gray-500 text-7xl md:text-8xl" />
        <SiPhp className="text-gray-500 text-7xl md:text-8xl" />
        <SiMysql className="text-gray-500 text-7xl md:text-8xl" />
        <SiTailwindcss className="text-gray-500 text-7xl md:text-8xl" />
        <RiReactjsFill className="text-gray-500 text-7xl md:text-8xl" />
        <RiGatsbyFill className="text-gray-500 text-7xl md:text-8xl" />
        <SiGraphql className="text-gray-500 text-7xl md:text-8xl" />
        <SiNodedotjs className="text-gray-500 text-7xl md:text-8xl" />
        <SiPython className="text-gray-500 text-7xl md:text-8xl" />
        <SiGit className="text-gray-500 text-7xl md:text-8xl" />
      </div>
      <div className="mt-20 text-center">
        <Button>View Resume</Button>
      </div>
    </div>
  );
};

export default About;
