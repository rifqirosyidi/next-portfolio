import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import Button from "./Button";

const Social = () => {
  return (
    <>
      <Button href="https://github.com/rifqirosyidi">
        <FaGithubAlt className="text-lg lg:text-xl" />
      </Button>
      <Button href="#">
        <FaInstagram className="text-lg lg:text-xl" />
      </Button>
      <Button href="#">
        <FaFacebookF className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://id.linkedin.com/in/rifqi-rosyidi-125804169">
        <FaLinkedinIn className="text-lg lg:text-xl" />
      </Button>
    </>
  );
};

export default Social;
