type Props = {
  text: string;
};

const SubmitBtn: React.FC<Props> = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="w-full bg-sky-500 text-white border border-sky-500 p-2 rounded-md hover:bg-sky-400  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 capitalize"
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
