import React from "react";
import Button from "./Button";
import PostDate from "./PostDate";

const Post = ({ publishedDate, slug, title, description }) => {
  const link = `https://devsign.id/article/${slug}`;
  const date = new Date(publishedDate).toDateString();
  return (
    <div className="grid md:grid-cols-4 gap-x-20 my-5">
      <div className="w-full">
        <PostDate>{date}</PostDate>
      </div>

      <div className="md:col-span-3">
        <h3 className="font-primary font-medium md:font-bold text-gray-500 dark:text-gray-300 tracking-wide md:tracking-wider text-lg  md:text-md lg:text-2xl">
          {title}
        </h3>
        <p className="mt-2 font-secondary font-light text-gray-500 text-sm md:text-md lg:text-lg md:w-2/3">
          {description}
        </p>
        <div className="-ml-4 md:mt-5  text-left">
          <a href={link}>
            <Button>Read More</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
