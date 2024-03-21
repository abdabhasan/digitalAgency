type Props = {};

const loading: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg bg-sky-100"></span>
    </div>
  );
};

export default loading;
