import React from "react";

const Textarea = ({ label, id, name, type = "text", placeholder }) => {
  return (
    <div className="mb-10">
      <label
        className="font-primary text-gray-500 dark:text-gray-300 block pb-4"
        for={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        className="font-primary text-gray-500 bg-gray-200 dark:bg-gray-900 shadow-inner p-4 rounded-lg w-full transition duration-500 transform focus:outline-none focus:ring focus:ring-gray-500 focus:bg-gray-100 focus:shadow-lg focus:scale-105"
        placeholder={placeholder}
        type={type}
        name={name}
      ></textarea>
    </div>
  );
};

export default Textarea;
