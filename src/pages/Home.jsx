import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Home = () => {
  const navigate = useNavigate();
  const { setUser, username, user } = useUser();
  console.log(username?.user?.name);
  return (
    <div>
      <h1>Welcome! {user.name ? user.name : username?.user?.name}</h1>
      <button
        className="mt-[20px] bg-primary-color text-white py-[8px] px-[15px] rounded-md cursor-pointer hover:bg-primary-dark"
        onClick={() => {
          setUser({
            name: "",
            email: "",
            contact: "",
            state: "",
            district: "",
            captcha: "",
          });
          localStorage.removeItem("data");
          navigate("/");
        }}
      >
        Go to Form
      </button>
    </div>
  );
};
