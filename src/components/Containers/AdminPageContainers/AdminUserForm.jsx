"use client";

import Image from "next/image";
import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1>Add New User</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-700"
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-700"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-700"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-700"
      />
      <select
        name="isAdmin"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-700"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="p-5 cursor-pointer bg-blue-500 border-none rounded-md text-gray-700 font-bold">
        Add
      </button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
