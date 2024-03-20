import BackToBlogBtn from "@/components/Btns/BackToBlogBtn";
import ReadMoreBtn from "@/components/Btns/ReadMoreBtn";
import PostAuthor from "@/components/PostAuthor";
import Image from "next/image";

type Props = {
  postTitle: string;
  postDescription: string;
  postCatigory: string;
  postImg: string;
};

const SinglePostPage: React.FC<Props> = ({
  postTitle,
  postDescription,
  postCatigory,
  postImg,
}: Props): JSX.Element => {
  {
    postTitle = "TEST";
    postDescription =
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iureveritatis sint autem nesciunt, laudantium quia tempore delect";
    postCatigory = "category";
    postImg = "/contact.svg";
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className=" ">
        <div className="container px-6 py-10 mx-auto">
          <BackToBlogBtn />

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <Image
              width={300}
              height={300}
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={postImg}
              alt={postTitle}
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-sky-300 uppercase">{postCatigory}</p>

              <h1 className="block mt-4 text-2xl font-semibold text-gray-800   dark:text-white md:text-3xl">
                {postTitle}
              </h1>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {postDescription}
              </p>

              <ReadMoreBtn postLink="#" />
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
