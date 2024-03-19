import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" className="btn btn-ghost text-xl">
      Logo
    </Link>
  );
};

export default Logo;
