"use client";
import SubmitBtn from "@/components/Btns/SubmitBtn";
import LoginInput from "@/components/LoginInput";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

type Props = {
  submitBtnText: string;
};

const RegisterFormContainer: React.FC<Props> = ({ submitBtnText }: Props) => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="space-y-4">
      <LoginInput name="username" type="text" />
      <LoginInput name="email" type="email" />
      <LoginInput name="password" type="password" />
      <LoginInput name="passwordRepeat" type="password" />
      <div>
        <SubmitBtn text={submitBtnText} />
      </div>
      <p>{state?.error}</p>
    </form>
  );
};

export default RegisterFormContainer;
