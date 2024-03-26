import Image from "next/image";
import { deletePost } from "@/lib/actions";
import axios from "axios";

type Props = {};

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
  const posts = await getData();

  return (
    <div className="w-3/4 md:w-1/2 mx-auto my-16 flex flex-col">
      <h1 className="text-sky-500 text-2xl text-center">Posts</h1>
      {posts?.map((post) => (
        <div
          className="my-3 flex items-center justify-between gap-4 border border-gray-300 bg-white rounded-lg p-3"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className="rounded-md"
            />
            <span className="text-gray-800">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="px-2.5 py-1 bg-red-500  hover:bg-red-500/60 text-white rounded-md border-none cursor-pointer transition-all duration-200">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
