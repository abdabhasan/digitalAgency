import PostCard from "@/components/PostCard";

type Props = {};

const BlogPage: React.FC = (props: Props): JSX.Element => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard
          cardTitle="test1"
          cardDescription="testtesttest"
          cardImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"
          postLink="somelink"
        />
        <PostCard
          cardTitle="test1"
          cardDescription="testtesttest"
          cardImg="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          postLink="somelink"
        />
      </section>
    </main>
  );
};

export default BlogPage;
