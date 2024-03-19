import Link from "next/link";

type Props = {};

const Logo: React.FC = (props: Props): JSX.Element => {
  return (
    <Link href="/" className="btn btn-ghost text-xl hover:text-sky-300">
      CTA
    </Link>
  );
};

export default Logo;
