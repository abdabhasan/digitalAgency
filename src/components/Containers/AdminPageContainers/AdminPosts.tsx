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
    <div className="flex flex-col gap-5">
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div
          className="my-5 flex items-center justify-between gap-5"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className="text-gray-900">{post.title}</span>{" "}
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="px-2.5 py-1 bg-red-500/60 text-white rounded-md border-none cursor-pointer">
              Delete
            </button>{" "}
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
