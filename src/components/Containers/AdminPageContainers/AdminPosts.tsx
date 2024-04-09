import Image from "next/image";
import axios from "axios";
import DeletePostBtn from "@/components/Btns/DeletePostBtn";

type Props = {};

type Post = {
  _id: string;
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
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const AdminPosts: React.FC = async (props: Props) => {
  const posts: Post[] = await getData();

  return (
    <div className="w-3/4 md:w-1/2 mx-auto my-16 flex flex-col">
      <h1 className="text-sky-500 text-2xl text-center">Posts</h1>
      {posts?.map((post: Post) => (
        <div
          className="my-3 flex items-center justify-between gap-4 border border-gray-300 bg-white rounded-lg p-3"
          key={post._id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={post.img}
              alt=""
              width={50}
              height={50}
              className="rounded-md"
            />
            <span className="text-gray-800">{post.title}</span>
          </div>
          <DeletePostBtn postId={post._id} />
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
