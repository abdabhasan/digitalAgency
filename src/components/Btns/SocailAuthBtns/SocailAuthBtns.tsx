import GithubBtn from "./GithubBtn";
import GoogleBtn from "./GoogleBtn";

type Props = {
  btnsText: string;
};

const SocailAuthBtns: React.FC<Props> = ({ btnsText }: Props) => {
  return (
    <>
      <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
        <GoogleBtn text={`${btnsText} with Google`} />
      </div>
      <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
        <GithubBtn text={`${btnsText} with Gitub`} />
      </div>
    </>
  );
};

export default SocailAuthBtns;
