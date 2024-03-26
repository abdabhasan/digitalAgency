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
    <div className="max-w-sm bg-white  rounded-lg shadow ">
      <Image
        src={img}
        width={300}
        height={300}
        alt="postImage"
        className="w-[24rem] h-[16rem] rounded-t-lg"
      />
      <div className="p-5 bg-white rounded-lg">
        <h5 className="mb-2 text-2xl text-sky-500 font-bold tracking-tight">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <ReadMoreBtn slug={slug} />
      </div>
    </div>
  );
};

export default PostCard;
