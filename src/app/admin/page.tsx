import Link from "next/link";

type Props = {};

const AdminPage: React.FC = async (props: Props) => {
  return (
    <div className="mt-12 h-screen">
      <h1 className="text-4xl my-10 text-center font-bold text-sky-500 ">
        Admin Panels
      </h1>
      <div className="w-3/4 md:w-1/4 mx-auto">
        <Link
          href="/admin/posts"
          className="btn my-2 w-full bg-white text-sky-500 border border-sky-500"
        >
          Posts Cotrol Panel
        </Link>
        <Link
          href="/admin/users"
          className="btn my-2 w-full bg-white text-sky-500 border border-sky-500"
        >
          Users Cotrol Panel
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
