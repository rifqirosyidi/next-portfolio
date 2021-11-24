import React from "react";
import Button from "../Button";
import Card from "../Card";
import OldPortfolio from "../../public/assets/image/old_portfolio.png";
import WebScraping from "../../public/assets/image/webscraping.png";
import AnyRecipe from "../../public/assets/image/recipe_app.png";
import RecentPortfolio from "../../public/assets/image/recent_portfolio.png";

const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        <Card
          src={OldPortfolio}
          alt="Old portfolio image"
          link="https://rifqi.netlify.app"
          title="Old Portfolio"
          date="Feb 18"
          description="This is my first portfolio built using react, just simple ones."
        />
        <Card
          src={WebScraping}
          alt="Webscraping image"
          link="https://github.com/rifqirosyidi/scraping-websites"
          title="Webscraping Project"
          date="June 20"
          description="A webscraping project. This project is to scrape the data from some e-commerce"
        />
        <Card
          src={AnyRecipe}
          alt="Any recipe image"
          link="https://any-recipes.netlify.app"
          title="Recipes Website"
          date="Oct 19"
          description="A simple website to show recipes from all over the world using edamam api"
        />
        <Card
          src={RecentPortfolio}
          alt="Recent porfolio"
          link="https://rief.netlify.app"
          title="Recent Portfolio"
          date="Des 20"
          description="Just another portfolio, built using Gatsbyjs and Framer Motion with TailwindCSS."
        />
        <Card
          src={OldPortfolio}
          alt="Another Github Portfolio"
          link="https://rifqirosyidi.github.io"
          title="Github.io Portfolio"
          date="Des 18"
          description="Just another portfolio, built using simple HTML, CSS and JS only"
        />
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button>View More</Button>
      </div>
    </>
  );
};

export default Work;
