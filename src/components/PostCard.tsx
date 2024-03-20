import Image from "next/image";
import ReadMoreBtn from "./Btns/ReadMoreBtn";

type Props = {
  cardImg: string;
  cardTitle: string;
  cardDescription: string;
  postLink: string;
};

const PostCard: React.FC<Props> = ({
  cardImg,
  cardTitle,
  cardDescription,
  postLink,
}: Props): JSX.Element => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={cardImg}
        width={300}
        height={300}
        alt="postImage"
        className="w-[10rem] sm:w-[28rem] rounded-lg"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cardDescription}
        </p>
        <ReadMoreBtn postLink={postLink} />
      </div>
    </div>
  );
};

export default PostCard;
