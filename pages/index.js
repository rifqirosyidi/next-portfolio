import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/section/About";
import Blog from "../components/section/Blog";
import Contact from "../components/section/Contact";
import Work from "../components/section/Work";
import Section from "../components/Section";

export default function Home({ articles }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap"
        />
      </Head>

      <div className="container px-4 mx-auto lg:px-32 lg:pt-20">
        <Hero />
        <Navigation />

        <div className="hidden md:block py-20" />
        <div className="py-20">
          <Section
            id="work"
            title="My Work"
            description="Here's my list collection of favorites project i designed & developed recently. Feel free to explore."
          />
          <Work />

          <Section
            id="blog"
            title="My Blog"
            description="The following are some of the writings that i have made in my spare time"
          />
          <Blog articles={articles} />

          <Section
            id="about"
            title="About Me"
            description="Hi i am Rifqi, a Web Developer & Designer from Indonesia. While i am proficient in FullStack developer, My Expertise is in FrontEnd Web Development such as React, Node, Gatsby, etc"
          />
          <About />

          <Section
            id="contact"
            title="Contact"
            description="If you have any question, you can contact me via the information below"
          />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://cms.devsign.id/articles?_limit=4&_author.slug=rifqi-rosyidi&_sort=id:desc`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
