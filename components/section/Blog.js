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
      </div>
      <div className="text-center md:mt-16">
        <Button>View All</Button>
      </div>
    </>
  );
};

export default Blog;
