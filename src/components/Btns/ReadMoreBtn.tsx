import Link from "next/link";

type Props = {
  postLink: string;
};

const ReadMoreBtn: React.FC<Props> = ({ postLink }: Props): JSX.Element => {
  return (
    <Link
      href={postLink}
      className="inline-flex items-center py-2 text-sm font-medium text-center text-white underline hover:text-blue-400"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default ReadMoreBtn;
