import Image from "next/image";
import axios from "axios";
import DeleteUserBtn from "@/components/Btns/DeleteUserBtn";

type Props = {};

type User = {
  _id: string;
  email: string;
  img: string;
};

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

const AdminUsers: React.FC = async (props: Props) => {
  const users: User[] = await getData();

  return (
    <div className="w-3/4 md:w-1/2 mx-auto my-16 flex flex-col">
      <h1 className="text-sky-500 text-2xl text-center">Users</h1>
      {users?.map((user: User) => (
        <div
          className="my-3 flex items-center justify-between gap-4 border border-gray-300 bg-white rounded-lg p-3"
          key={user._id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className="rounded-md"
            />
            <span className="text-gray-800">{user.email}</span>
          </div>
          <DeleteUserBtn userId={user._id} />
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
