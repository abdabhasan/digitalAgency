import { Suspense } from "react";
import {
  AdminUserForm,
  AdminUsers,
} from "@/components/Containers/AdminPageContainers";
import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex gap-24 flex-col">
      <h1 className="text-3xl pt-8 font-bold text-sky-500 text-center">
        Users Control Panel
      </h1>
      <AdminUserForm />
      <Suspense fallback={<LoadingSpinner />}>
        <AdminUsers />
      </Suspense>
    </div>
  );
};

export default page;
