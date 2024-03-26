type Props = {};

const AdminFormBtn: React.FC = (props: Props) => {
  return (
    <button className="p-4 w-full cursor-pointer bg-sky-500 border border-sky-500 rounded-md text-white font-bold hover:bg-white hover:text-sky-500 transition-all duration-300">
      Add
    </button>
  );
};

export default AdminFormBtn;
