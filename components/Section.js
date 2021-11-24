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
      <p className="font-secondary text-gray-500 text-sm font-light md:text-lg mt-5 lg:mt-10 ">
        {description}
      </p>
    </div>
  );
};

export default Section;
