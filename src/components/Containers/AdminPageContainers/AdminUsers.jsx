import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import axios from "axios";

const USERS_ENDPOINT = `${process.env.API_ENDPOINT}/user`;

// GET users from api
const getData = async () => {
  try {
    const res = await axios.get(USERS_ENDPOINT);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const AdminUsers = async () => {
  const users = await getData();

  return (
    <div className="flex flex-col gap-5">
      <h1>Users</h1>
      {users?.map((user) => (
        <div
          className="my-5 flex items-center justify-between gap-5"
          key={user.id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="px-2.5 py-1 bg-red-600/60 text-white rounded-md cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
