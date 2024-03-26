"use client";
import SubmitBtn from "@/components/Btns/SubmitBtn";
import LoginInput from "@/components/Inputs/LoginInput";
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";

type Props = {
  submitBtnText: string;
};
const LoginFormContainer: React.FC<Props> = ({ submitBtnText }: Props) => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="space-y-6">
      <LoginInput name="username" type="text" />

      <LoginInput name="password" type="password" />
      <div>
        <SubmitBtn text={submitBtnText} />
      </div>
      <p>{state?.error}</p>
    </form>
  );
};

export default LoginFormContainer;
