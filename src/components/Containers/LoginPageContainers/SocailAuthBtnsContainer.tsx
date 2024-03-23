import SocailAuthBtns from "@/components/Btns/SocailAuthBtns/SocailAuthBtns";

type Props = {
  socialAuthBtnsText: string;
  isRegisterForm: boolean;
};

const SocailAuthBtnsContainer: React.FC<Props> = ({
  socialAuthBtnsText,
  isRegisterForm = false,
}: Props) => {
  return (
    <>
      <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
        <SocailAuthBtns btnsText={socialAuthBtnsText} />
      </div>
      <div className="mt-4 text-sm text-sky-50 text-center">
        <p>
          or with
          {isRegisterForm ? " email" : " username"}
        </p>
      </div>
    </>
  );
};

export default SocailAuthBtnsContainer;
