import { Captcha } from "../components/Captcha";
import { DropDown } from "../components/DropDown";
import { InputField } from "../components/InputField";
import { useUser } from "../context/UserContext";
import { data } from "../data/StateData";

export const Form = () => {
  const { user, setUser } = useUser();
  const selectedState = data.find((state) => state.state === user.state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const nameValue = value.replace(/[^A-Za-z]/g, "");
      setUser({ ...user, userName: nameValue });
    }
  };

  return (
    <>
      <div className="w-[360px] p-[30px] shadow-lg rounded">
        <h1 className="font-extrabold text-[36px] text-center text-primary-dark mb-[20px]">
          Apply
        </h1>
        <form className="flex flex-col">
          <InputField
            name="name"
            type="text"
            value={user.userName}
            handleChange={handleChange}
          />
          <InputField
            name="email"
            type="text"
            value={user.email}
            handleChange={handleChange}
          />
          <InputField
            name="contact"
            type="number"
            length={"10"}
            value={user.contact}
            handleChange={handleChange}
          />
          <div className="flex justify-between gap-1">
            <DropDown name="state" data={data.map((state) => state.state)} />
            <DropDown name="district" data={selectedState?.districts} />
          </div>
          <Captcha />
          <input
            type="submit"
            className="mt-[20px] bg-primary-color text-white py-[8px] rounded-md cursor-pointer hover:bg-primary-dark"
          />
        </form>
      </div>
    </>
  );
};
