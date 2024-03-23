import { FaGithub } from "react-icons/fa";
import { handleGithubLogin } from "@/lib/actions";

type Props = {
  text: string;
};

const GithubBtn: React.FC<Props> = ({ text }: Props) => {
  return (
    <>
      <form action={handleGithubLogin}>
        <button className="w-full flex justify-center items-center gap-2 bg-sky-900 text-sm text-white p-2 rounded-md hover:bg-sky-50 hover:text-sky-900 transition-colors duration-300">
          <FaGithub className="text-xl" />
          {text}
        </button>
      </form>
    </>
  );
};

export default GithubBtn;
