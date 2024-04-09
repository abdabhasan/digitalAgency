import {
  AdminPostForm,
  AdminPosts,
} from "@/components/Containers/AdminPageContainers";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { auth } from "@/app/api/auth/[...nextauth]/route";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();

  return (
    <div className="flex gap-24 flex-col">
      <h1 className="text-3xl pt-8 font-bold text-sky-500 text-center">
        Posts Control Panel
      </h1>
      <AdminPostForm userId={session?.user?.email} />
      <Suspense fallback={<LoadingSpinner />}>
        <AdminPosts />
      </Suspense>
    </div>
  );
};

export default page;
