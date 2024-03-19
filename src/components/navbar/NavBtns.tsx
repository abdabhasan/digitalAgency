import Link from "next/link";

type Props = {};

const session = true;

const NavBtns = (props: Props) => {
  return (
    <>
      {session ? (
        <Link href="/" className="btn">
          Logout
        </Link>
      ) : (
        <Link href="/login" className="btn">
          Login
        </Link>
      )}
    </>
  );
};

export default NavBtns;
