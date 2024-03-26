"use client";

import AdminFormBtn from "@/components/Btns/AdminFormBtn";
import AdminInput from "@/components/Inputs/AdminInput";
import AddPostTextarea from "@/components/Textareas/AddPostTextarea";
import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

type Props = {};

const AdminPostForm: React.FC = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col items-center space-y-4">
      <h1 className="text-sky-500 text-xl  m-0">Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <div className="w-2/3 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <AdminInput type="text" name="title" placeholder="title" />
        <AdminInput type="text" name="slug" placeholder="slug" />
        <AdminInput type="text" name="img" placeholder="image URL" />
        <AdminInput type="text" name="description" placeholder="Description" />
      </div>
      <div className="w-2/3 md:w-1/2">
        <AdminFormBtn />
      </div>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
