"use client";

import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-900"
      />
      <input
        type="text"
        name="slug"
        placeholder="slug"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-900"
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-900"
      />
      <textarea
        name="desc"
        placeholder="desc"
        rows="10"
        className="p-5 bg-gray-200 border-none rounded-md text-gray-900"
      ></textarea>
      <button className="p-5 cursor-pointer bg-blue-500 border-none rounded-md text-white font-bold">
        Add
      </button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
