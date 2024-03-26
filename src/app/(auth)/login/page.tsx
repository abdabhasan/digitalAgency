import {
  ImgContainer,
  TitleContainer,
  SocailAuthBtnsContainer,
  LoginFormContainer,
} from "@/components/Containers/LoginPageContainers";

import Link from "next/link";

type Props = {};

const LoginPage: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="flex h-screen absolute top-0 left-0 w-full p-0">
      <ImgContainer />
      <div className="w-full bg-sky-50 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <TitleContainer
            title="login"
            subTitle="Welcome Back to Our Community!"
          />
          <SocailAuthBtnsContainer
            socialAuthBtnsText="Login"
            isRegisterForm={false}
          />
          <LoginFormContainer submitBtnText="login" />
          <div className="mt-4 text-sm text-gray-800 text-center">
            <p>
              Do not have an account?{" "}
              <Link href="/register" className="text-sky-400 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
