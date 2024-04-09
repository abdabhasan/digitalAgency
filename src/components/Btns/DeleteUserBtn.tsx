import { deleteUser } from "@/lib/actions";

type Props = {
  userId: string;
};

const DeleteUserBtn: React.FC<Props> = ({ userId }: Props) => {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={userId} />
      <button className="px-2.5 py-1 bg-red-500  hover:bg-red-500/60 text-white rounded-md border-none cursor-pointer transition-all duration-200">
        Delete
      </button>
    </form>
  );
};

export default DeleteUserBtn;
