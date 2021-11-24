import Image from "next/image";
import PostDate from "./PostDate";

const Card = ({ link = "#", src, alt, date, title, description }) => {
  return (
    <div>
      <div className="w-full md:w-auto">
        <a href={link} target="_blank">
          <div className="cursor-pointer p-10 mx-auto text-center shadow-primary bg-white rounded transition duration-1000 hover:scale-105">
            <Image
              src={src}
              alt={alt}
              width="300"
              height="200"
              className="object-cover grayscale"
            />
          </div>
        </a>
      </div>
      <div className="">
        <PostDate>{date}</PostDate>
        <a
          href={link}
          target="_blank"
          className="block font-primary text-gray-500 dark:text-gray-300 text-lg md:text-3xl font-medium tracking-wide md:tracking-widest mb-2 md:font-bold transition duration-1000 hover:-translate-y-2"
        >
          {title}
        </a>
        <p className="font-secondary text-gray-500 text-md font-light text-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
