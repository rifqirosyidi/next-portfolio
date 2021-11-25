import Button from "../Button";
import Post from "../Post";

const Blog = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col">
        {articles.map((article) => (
          <Post
            key={article.id}
            publishedDate={article.published_at}
            slug={article.slug}
            title={article.title}
            description={article.description}
          />
        ))}
        <Post
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipis ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
        />
      </div>
      <div className="text-center md:mt-16">
        <Button>View All</Button>
      </div>
    </>
  );
};

export default Blog;
