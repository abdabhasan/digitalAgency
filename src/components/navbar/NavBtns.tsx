import Link from "next/link";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { logout } from "@/lib/actions";

type Props = {};

const NavBtns: React.FC = async (props: Props) => {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <form action={logout}>
          <button className="btn text-sky-500 bg-white border-none">
            Logout
          </button>
        </form>
      ) : (
        <Link href="/login" className="btn text-sky-500 bg-white border-none">
          Login
        </Link>
      )}
    </>
  );
};

export default NavBtns;
