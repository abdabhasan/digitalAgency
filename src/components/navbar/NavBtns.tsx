import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";

type Props = {};

const NavBtns: React.FC = async (props: Props) => {
  const session = await auth();
  console.log(session);
  return (
    <>
      {session?.user ? (
        <form action={handleLogout}>
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
