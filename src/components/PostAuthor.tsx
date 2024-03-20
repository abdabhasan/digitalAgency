import Image from "next/image";

type Props = {
  authorName: string;
  authorImg: string;
  authorJob: string;
};

const PostAuthor: React.FC<Props> = ({
  authorImg,
  authorJob,
  authorName,
}: Props): JSX.Element => {
  return (
    <div className="flex items-center mt-6">
      <Image
        width={400}
        height={400}
        className="object-cover object-center w-10 h-10 rounded-full"
        src={authorImg}
        alt={authorName}
      />

      <div className="mx-4">
        <h1 className="text-sm text-gray-700 dark:text-gray-200">
          {authorName}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{authorJob}</p>
      </div>
    </div>
  );
};

export default PostAuthor;
