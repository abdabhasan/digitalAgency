import Link from "next/link";

type Props = {};

const AdminPage: React.FC = async (props: Props) => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center h-screen">
      <div className="  md:w-1/4">
        <Link
          href="/admin/posts"
          className="btn w-full bg-white text-sky-500 border border-sky-500"
        >
          Posts Cotrol Panel
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
