import { deletePost } from "@/lib/actions";

type Props = {
  postId: string;
};

const DeletePostBtn: React.FC<Props> = ({ postId }: Props) => {
  return (
    <form action={deletePost}>
      <input type="hidden" name="id" value={postId} />
      <button className="px-2.5 py-1 bg-red-500  hover:bg-red-500/60 text-white rounded-md border-none cursor-pointer transition-all duration-200">
        Delete
      </button>
    </form>
  );
};

export default DeletePostBtn;
