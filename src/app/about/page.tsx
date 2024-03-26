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
            <h4 className="text-2xl font-bold mb-10 text-sky-500 ">About Us</h4>
            <h1 className="text-3xl font-bold text-black ">
              We Explore Oceanic Jewels
              <br />
              Majestic, Mystical,
              <br />
              Mesmerizing, and Memorable
            </h1>
            <p className="py-6 mt-5 text-gray-800">
              IslandExhibit's mission is to showcase the world's most enchanting
              islands—each a majestic, mystical, mesmerizing, and memorable
              jewel of nature. Our journey is one of discovery, bringing to
              light the vibrant cultures, unique wildlife, and breathtaking
              landscapes that lie hidden across the globe. We're dedicated to
              inspiring exploration and preservation, inviting our community to
              experience the wonders and stories of these pristine paradises.
              Join us on a voyage to uncover the treasures of the earth and sea,
              where every destination promises a dream turned reality.
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
