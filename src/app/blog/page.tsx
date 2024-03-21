import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/data";

type Props = {};

type Post = {
  img: string;
  title: string;
  description: string;
  slug: string;
};

const BlogPage: React.FC = async (props: Props) => {
  const posts = await getPosts();
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: Post) => {
          return <PostCard key={post.title} post={post} />;
        })}
      </section>
    </main>
  );
};

export default BlogPage;
