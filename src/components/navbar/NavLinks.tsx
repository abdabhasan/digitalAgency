"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isAdmin: boolean;
};

const links = [
  {
    id: "1",
    title: "Home",
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

const NavLinks: React.FC<Props> = ({ isAdmin }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.path}
            className={`${
              pathName === link.path && "active-link"
            } hover:bg-sky-50 hover:text-sky-500`}
          >
            {link.title}
          </Link>
        </li>
      ))}
      {isAdmin && (
        <li>
          <Link
            href="/admin"
            className={`${
              pathName === "/admin" && "active-link"
            } hover:bg-sky-50 hover:text-sky-500`}
          >
            Admin
          </Link>
        </li>
      )}
    </>
  );
};

export default NavLinks;
