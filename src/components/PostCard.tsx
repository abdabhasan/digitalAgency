import Image from "next/image";
import ReadMoreBtn from "./Btns/ReadMoreBtn";

type Post = {
  img: string;
  title: string;
  description: string;
  slug: string;
};

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }: Props): JSX.Element => {
  const { img, title, description, slug } = post;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={img}
        width={300}
        height={300}
        alt="postImage"
        className="w-[28rem] h-[14rem] rounded-lg"
        // style={{ maxWidth: "24rem", maxHeight: "36rem" }}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <ReadMoreBtn slug={slug} />
      </div>
    </div>
  );
};

export default PostCard;
