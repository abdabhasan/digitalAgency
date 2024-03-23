import { handleGoogleLogin } from "@/lib/actions";
import { FcGoogle } from "react-icons/fc";

type Props = {
  text: string;
};

const GoogleBtn: React.FC<Props> = ({ text }: Props) => {
  return (
    <form action={handleGoogleLogin}>
      <button className="w-full flex justify-center items-center gap-2 bg-sky-50 text-sky-900 text-sm  p-2 rounded-md hover:bg-sky-900 hover:text-white transition-colors duration-300">
        <FcGoogle className="text-xl" />
        {text}
      </button>
    </form>
  );
};

export default GoogleBtn;
