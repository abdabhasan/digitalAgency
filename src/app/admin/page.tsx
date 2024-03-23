import { register } from "@/lib/actions";
import { signIn, signOut } from "@/lib/auth";

type Props = {};

const AdminPage: React.FC = (props: Props): JSX.Element => {
  const handleLogin = async () => {
    "use server";
    console.log("CLICKED");
  };
  const handleLogout = async () => {
    "use server";
    await signOut();
  };

  return (
    <div>
      <form action={register}>
        <input type="text" name="username" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="password" name="passwordRepeat" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default AdminPage;
