import Link from "next/link";

type Props = {};

const links = [
  {
    id: "1",
    title: "Homepage",
    path: "/",
  },
  {
    id: "2",
    title: "About",
    path: "/about",
  },
  {
    id: "3",
    title: "Contact",
    path: "/contact",
  },
  {
    id: "4",
    title: "Blog",
    path: "/blog",
  },
];

const isAdmin = true;

const NavLinks = (props: Props) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
      {isAdmin && (
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      )}
    </>
  );
};

export default NavLinks;
