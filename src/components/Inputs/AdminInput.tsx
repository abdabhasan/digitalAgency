type Props = {
  type: string;
  name: string;
  placeholder: string;
};

const AdminInput: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  return (
    <div className="md:col-span-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-4 w-full bg-white text-sky-500   border border-sky-500 rounded-md placeholder:capitalize"
      />
    </div>
  );
};

export default AdminInput;
