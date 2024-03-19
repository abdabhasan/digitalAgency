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
      className="w-full rounded-md py-3 px-4 bg-base-300 text-sm outline-none"
    />
  );
};

export default ContactInput;
