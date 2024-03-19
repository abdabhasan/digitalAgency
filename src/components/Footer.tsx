import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

type Props = {};
const currentYear: number = new Date().getFullYear();

const Footer: React.FC = (props: Props): JSX.Element => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © {currentYear} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF className="text-2xl hover:text-sky-500 transition-all duration-300" />
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <FaXTwitter className="text-2xl hover:text-sky-500 transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="text-2xl hover:text-sky-500 transition-all duration-300" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
