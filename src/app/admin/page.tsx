import { Suspense } from "react";
import {
  AdminPostForm,
  AdminPosts,
  AdminUserForm,
  AdminUsers,
} from "@/components/Containers/AdminPageContainers";

import { auth } from "@/lib/auth";

type Props = {};

const AdminPage: React.FC = async (props: Props) => {
  const session = await auth();

  return (
    <div className="mt-12 flex flex-col gap-24">
      <div className="flex gap-24 flex-col md:flex-row">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>
      <div className="flex gap-24 flex-col md:flex-row">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
