type Props = {
  title: string;
  subTitle: string;
};

const TitleContainer: React.FC<Props> = ({
  title,
  subTitle,
}: Props): JSX.Element => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 text-center capitalize">
        {title}
      </h1>
      <h1 className="text-sm font-semibold mb-6 text-sky-300 text-center">
        {subTitle}
      </h1>
    </>
  );
};

export default TitleContainer;
