import BackToBlogBtn from "@/components/Btns/BackToBlogBtn";
import ReadMoreBtn from "@/components/Btns/ReadMoreBtn";
import PostAuthor from "@/components/PostAuthor";
import axios from "axios";
import Image from "next/image";

type Props = {
  params: object;
};

const BLOG_ENDPOINT = `${process.env.API_ENDPOINT}/blog`;

// GET post from api
const getData = async (slug: string) => {
  try {
    const res = await axios.get(`${BLOG_ENDPOINT}/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const SinglePostPage: React.FC<Props> = async ({ params }: Props) => {
  const { slug } = params;

  const post = await getData(slug);
  const { img, title, description } = post;

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full">
        <div className="container  px-6 py-10 mx-auto">
          <BackToBlogBtn />

          <div className="mt-8 lg:-mx-6 lg:flex ">
            <Image
              width={300}
              height={300}
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-[28rem] "
              src={img}
              alt={title}
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 flex flex-col justify-between">
              <p className="text-sm text-sky-400 uppercase">catigory</p>

              <div>
                <h1 className="block mt-4 text-2xl font-semibold text-sky-400  md:text-3xl">
                  {title}
                </h1>

                <p className="mt-6 text-sm text-gray-800   md:text-sm">
                  {description}
                </p>
              </div>

              <PostAuthor
                authorName="Anderson"
                authorJob="dev"
                authorImg="/contact.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
