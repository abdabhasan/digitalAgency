import Statstics from "@/components/Statstics";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const AboutPage: React.FC = (props: Props): JSX.Element => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <Image
            src="/about.svg"
            alt="hero"
            width={800}
            height={800}
            className="w-[28rem] sm:w-[34rem] rounded-lg"
          />
          <div>
            <h4 className="text-2xl font-bold mb-10 text-sky-400 ">
              About The Agency
            </h4>
            <h1 className="text-5xl font-bold ">
              We Forge Digital Concepts: Vaster, Vivid, Valiant, and Visionary
            </h1>
            <p className="py-6 mt-5">
              At the heart of our mission lies the passion to innovate and
              inspire. Our team expertly crafts digital experiences that
              transcend the ordinary, embodying vast creativity, vivid
              storytelling, valiant innovation, and forward-thinking vision.
              We're not just building the digital realm; we're reimagining its
              possibilities.
            </p>
            <div className="mt-5">
              <Statstics />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
