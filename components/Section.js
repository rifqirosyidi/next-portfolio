import React from "react";

const Section = ({ title, description, id }) => {
  return (
    <div className="lg:px-4 py-10 md:pb-20">
      <h2
        id={id}
        className="py-2 text-gray-500 md:pt-20 dark:text-gray-300 font-primary font-medium text-2xl md:text-7xl tracking-widest"
      >
        {title}
      </h2>
      <p className="font-primary text-gray-400 text-sm md:text-lg mt-2 md:w-1/2 md:border-l-2 md:pl-10 md:py-10 md:border-gray-400 lg:ml-56 lg:mt-10 ">
        {description}
      </p>
    </div>
  );
};

export default Section;
