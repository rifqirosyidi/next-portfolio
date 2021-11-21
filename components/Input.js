import React from "react";

const Input = ({ label, id, name, type = "text", placeholder }) => {
  return (
    <div className="mb-5 md:mb-10">
      <label
        className="font-primary text-gray-500 dark:text-gray-300 block pb-2 md:pb-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="font-primary text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-900 shadow-inner p-4 rounded-lg w-full transition duration-500 transform focus:outline-none focus:ring focus:ring-gray-500 focus:bg-gray-100 focus:shadow-lg focus:scale-105"
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
