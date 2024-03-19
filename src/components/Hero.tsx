import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <Image
          src="/hero.svg"
          alt="hero"
          width={1000}
          height={800}
          className="w-[28rem] sm:w-[38rem] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-7xl font-bold">
            Creative
            <br />
            Thoughts
            <br />
            Agency
          </h1>
          <p className="py-6">
            Discover the essence of innovation at Creative Thoughts Agency.
            Here, creativity intersects with expertise to craft captivating
            solutions that elevate your brand and engage your audience. Let's
            transform your visions into impactful realities together.
          </p>
          <div className="btns flex gap-3">
            <Link href="/about" className="btn bg-sky-500 text-white">
              Learn More
            </Link>
            <Link href="/contact" className="btn bg-white text-sky-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
