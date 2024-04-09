import PostCard from "@/components/PostCard";
import axios from "axios";

type Props = {};

type Post = {
  img: string;
  title: string;
  description: string;
  slug: string;
};

const BLOG_ENDPOINT = `${process.env.API_ENDPOINT}/blog`;

// GET posts from api
const getData = async () => {
  try {
    const res = await axios.get(BLOG_ENDPOINT);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const BlogPage: React.FC = async (props: Props) => {
  const posts = await getData();
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post: Post) => {
            return <PostCard key={post.title} post={post} />;
          })
        ) : (
          <h1>No posts...</h1>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
