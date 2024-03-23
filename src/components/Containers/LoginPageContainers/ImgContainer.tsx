import Image from "next/image";

type Props = {};

const imgUrl =
  "https://images.unsplash.com/photo-1594629242947-2f81cf63803e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D";

const ImgContainer = (props: Props) => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
      <Image
        width={300}
        height={400}
        alt="img"
        className="w-full h-full"
        src={imgUrl}
      />
    </div>
  );
};

export default ImgContainer;
