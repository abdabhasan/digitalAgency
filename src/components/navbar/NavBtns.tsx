import Link from "next/link";

type Props = {};

const session = true;

const NavBtns: React.FC = (props: Props): JSX.Element => {
  return (
    <>
      {session ? (
        <Link href="/" className="btn text-sky-500 bg-white">
          Logout
        </Link>
      ) : (
        <Link href="/login" className="btn text-sky-500 bg-white">
          Login
        </Link>
      )}
    </>
  );
};

export default NavBtns;
