"use client";

import AdminFormBtn from "@/components/Btns/AdminFormBtn";
import AdminInput from "@/components/Inputs/AdminInput";
import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";

type Props = {};

const AdminUserForm: React.FC = (props: Props) => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col items-center space-y-4">
      <h1 className="text-sky-500 text-xl  m-0">Add New User</h1>
      <div className="w-2/3 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <AdminInput type="email" name="email" placeholder="email" />
        <AdminInput type="password" name="password" placeholder="password" />
      </div>
      <div className="w-2/3 md:w-1/2">
        <AdminInput type="text" name="img" placeholder="img" />
        <select
          name="isAdmin"
          className="p-4 mt-4 mb-5 w-full bg-white text-sky-500   border border-sky-500 rounded-md placeholder:capitalize"
        >
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <AdminFormBtn />
      </div>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
