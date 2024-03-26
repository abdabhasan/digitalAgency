type Props = {
  name: string;
  type: string;
};

const LoginInput: React.FC<Props> = ({ name, type }: Props): JSX.Element => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 capitalize"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="mt-1 p-2 w-full border border-sky-500 rounded-md bg-white text-gray-800 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
      />
    </div>
  );
};

export default LoginInput;
