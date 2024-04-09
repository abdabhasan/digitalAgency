"use client";
import SubmitBtn from "@/components/Btns/SubmitBtn";
import LoginInput from "@/components/Inputs/LoginInput";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

type Props = {
  submitBtnText: string;
};

const LoginFormContainer: React.FC<Props> = ({ submitBtnText }: Props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      window.location.href = "/";
    } else {
      toast.error("something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <LoginInput name="email" type="email" />

      <LoginInput name="password" type="password" />
      <div>
        <SubmitBtn text={submitBtnText} />
      </div>
    </form>
  );
};

export default LoginFormContainer;
