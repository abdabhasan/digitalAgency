import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <Image
          src="/hero.svg"
          alt="hero"
          width={1000}
          height={800}
          className="w-[28rem] sm:w-[38rem] rounded-lg"
        />
        <div>
          <h1 className="text-6xl text-black font-bold">
            Journey
            <br />
            Through
            <br />
            The Isles
            <br />
            Of Wonder
          </h1>
          <p className="py-6  text-gray-800  ">
            Dive into "IslandExhibit" and discover a world where every island
            tells a story. From the untouched beauty of secluded beaches to the
            vibrant life of exotic jungles, IslandExhibit brings you closer to
            the planet’s most mesmerizing islands. Explore the mysteries,
            embrace the cultures, and find your next adventure with us as we
            showcase the wonders that await in these paradise isles.
          </p>
          <div className="btns flex gap-3">
            <Link
              href="/about"
              className="btn bg-sky-500 text-white border-none"
            >
              Learn More
            </Link>
            <Link
              href="/blog"
              className="btn bg-white text-sky-500 border-sky-500 "
            >
              Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
