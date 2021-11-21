import React from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-4 md:gap-x-20 ">
      <div className="order-last md:order-first flex items-start md:items-end flex-col justify-center mt-10 md:mt-0">
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end">
          <BsTelephone className="text-2xl md:text-4xl md:items-end ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            0882 3045 6676
          </p>
        </div>
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end mt-5 md:mt-20">
          <BsEnvelope className="text-2xl md:text-4xl ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            rief.rosyidi@gmail.com
          </p>
        </div>
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end mt-5 md:mt-20">
          <BsGeoAlt className="text-2xl md:text-4xl ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            Jl. Bungkal Sambikerep 89
          </p>
        </div>
      </div>
      <div className="md:col-span-2 md:mt-0">
        <Input
          label="Enter your name"
          id="name"
          name="name"
          placeholder="your name"
        />
        <Input
          label="Enter your email"
          id="email"
          name="email"
          placeholder="youremail@example.com"
        />
        <Textarea
          label="Enter your message"
          id="message"
          type="textarea"
          name="message"
          placeholder="message description here"
        />
        <Button>Send Message</Button>
      </div>
    </div>
  );
};

export default Contact;
