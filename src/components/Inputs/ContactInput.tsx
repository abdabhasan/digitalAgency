type Props = {
  type: string;
  placeholder: string;
};

const ContactInput: React.FC<Props> = ({
  type,
  placeholder,
}: Props): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md py-3 px-4 bg-white text-sky-500 placeholder:text-sky-500 border border-sky-500 text-sm outline-none"
    />
  );
};

export default ContactInput;
