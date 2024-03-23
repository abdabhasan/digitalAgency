import {
  ImgContainer,
  TitleContainer,
  SocailAuthBtnsContainer,
} from "@/components/Containers/LoginPageContainers";
import RegisterFormContainer from "@/components/Containers/RegisterPageContainers/RegisterFormContainer";

import Link from "next/link";

type Props = {};

const RegisterPage: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="flex h-screen absolute top-0 left-0 w-full p-0">
      <ImgContainer />
      <div className="w-full bg-base-200 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <TitleContainer
            title="sign up"
            subTitle="Join to Our Community with all time access and free"
          />
          <SocailAuthBtnsContainer
            socialAuthBtnsText="Sign Up"
            isRegisterForm={true}
          />
          <RegisterFormContainer submitBtnText="sign up" />
          <div className="mt-4 text-sm text-white text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-sky-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
