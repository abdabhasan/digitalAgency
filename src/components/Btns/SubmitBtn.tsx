type Props = {
  text: string;
};

const SubmitBtn: React.FC<Props> = ({ text }: Props) => {
  return (
    <button className="w-full bg-sky-500 text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 capitalize">
      {text}
    </button>
  );
};

export default SubmitBtn;
