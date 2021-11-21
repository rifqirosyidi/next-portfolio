import Image from "next/image";

const Card = ({ link = "#", src, alt, date, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-20 md:mb-10">
      <div className="w-full md:w-auto md:mx-10">
        <a href={link} target="_blank">
          <div className="cursor-pointer bg-white rounded transition duration-1000 hover:scale-105">
            <Image
              src={src}
              alt={alt}
              width="300"
              height="200"
              className="object-scale-down grayscale"
            />
          </div>
        </a>
        <p className="hidden md:block md:text-right text-gray-400 font-primary text-lg my-4">
          {date}
        </p>
      </div>
      <div className="mt-4 md:-mt-20">
        <a
          href={link}
          target="_blank"
          className="block font-primary text-gray-500 dark:text-gray-300 text-lg md:text-3xl font-medium tracking-wide md:tracking-widest mb-2 md:font-bold transition duration-1000 hover:-translate-y-2"
        >
          {title}
        </a>
        <p className="font-primary text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
