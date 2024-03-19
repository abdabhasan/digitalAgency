import ContactInput from "@/components/ContactInput";
import Image from "next/image";

type Props = {};

const ContactPage: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl my-16 text-center font-extrabold">
        Let's Talk !
      </h1>
      <div className="grid md:grid-cols-2 items-center gap-16 px-5 mx-auto max-w-4xl">
        <div>
          <Image
            src="/contact.svg"
            alt="contact us"
            width={900}
            height={900}
            className="w-[28rem] sm:w-[38rem] rounded-lg"
          />
        </div>
        <form className="ml-auo space-y-4">
          <ContactInput type="text" placeholder="Name" />
          <ContactInput type="email" placeholder="Email" />
          <ContactInput type="text" placeholder="Subject" />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 bg-base-300 text-sm pt-3 outline-none"
          ></textarea>
          <button
            type="button"
            className="text-white bg-sky-500 hover:bg-sky-600 transition-all duration-300 font-semibold rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
