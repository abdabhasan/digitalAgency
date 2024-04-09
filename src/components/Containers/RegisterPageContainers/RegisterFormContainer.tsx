"use client";
import SubmitBtn from "@/components/Btns/SubmitBtn";
import LoginInput from "@/components/Inputs/LoginInput";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

type Props = {
  submitBtnText: string;
};

const RegisterFormContainer: React.FC<Props> = ({ submitBtnText }: Props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
      });

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
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <LoginInput name="email" type="email" />
      <LoginInput name="password" type="password" />
      <LoginInput
        name="passwordRepeat"
        type="password"
        placeholder="password Repeat"
      />
      <div>
        <SubmitBtn text={submitBtnText} />
      </div>
    </form>
  );
};

export default RegisterFormContainer;
