import Link from "next/link";

type Props = {};

const BackToBlogBtn: React.FC = (props: Props) => {
  return (
    <Link
      href="/blog"
      className="btn text-white bg-sky-500 border-none hover:bg-white hover:text-sky-500"
    >
      Back To Blog
    </Link>
  );
};

export default BackToBlogBtn;
