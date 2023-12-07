import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Home = () => {
  const navigate = useNavigate();
  const { setUser, username, user } = useUser();
  return (
    <div>
      <h1 className="text-[24px] font-semibold">
        Welcome!{" "}
        <span className="text-primary-color font-bold">
          {user.name ? user.name : username?.user?.name}
        </span>
      </h1>
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
