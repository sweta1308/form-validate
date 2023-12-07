import { useNavigate } from "react-router-dom";
import { Captcha } from "../components/Captcha";
import { DropDown } from "../components/DropDown";
import { InputField } from "../components/InputField";
import { useUser } from "../context/UserContext";
import { data } from "../data/StateData";

export const Form = () => {
  const navigate = useNavigate();
  const { user, setUser, errors, setErrors, captcha } = useUser();
  const selectedState = data.find((state) => state.state === user.state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(user.name)) {
      setErrors({ ...errors, name: "Name can only contain alphabets." });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setErrors({ ...errors, email: "Please provide a valid email." });
    } else if (!/^[0-9]+$/.test(user.contact)) {
      setErrors({
        ...errors,
        contact: "Contact should only contain numbers.",
      });
    } else if (captcha.captcha1 + captcha.captcha2 !== Number(user.captcha)) {
      setErrors({ ...errors, captcha: "Please provide correct value." });
    } else {
      localStorage.setItem("data", JSON.stringify({ user }));
      navigate("/home");
    }
  };
  return (
    <>
      <div className="w-[360px] p-[30px] shadow-lg rounded xs:w-[320px] xs:p-[0px] xs:px-[15px] xs:py-[20px]">
        <h1 className="font-extrabold text-[36px] text-center text-primary-dark mb-[20px]">
          Apply
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <InputField
            name="name"
            type="text"
            value={user.name}
            handleChange={handleChange}
          />
          <p className="text-red-500 text-[12px] mt-[-5px]">
            {errors?.name && errors.name}
          </p>
          <InputField
            name="email"
            type="text"
            value={user.email}
            handleChange={handleChange}
          />
          <p className="text-red-500 text-[12px] mt-[-5px]">
            {errors?.email && errors.email}
          </p>
          <InputField
            name="contact"
            type="text"
            length={"10"}
            value={user.contact}
            handleChange={handleChange}
          />
          <p className="text-red-500 text-[12px] mt-[-5px]">
            {errors?.contact && errors.contact}
          </p>
          <div className="flex justify-between gap-1">
            <DropDown nameEl="state" data={data.map((state) => state.state)} />
            <DropDown nameEl="district" data={selectedState?.districts} />
          </div>
          <Captcha />
          <p className="text-red-500 text-[12px]">
            {errors?.captcha && errors.captcha}
          </p>
          <input
            type="submit"
            className="mt-[20px] bg-primary-color text-white py-[8px] rounded-md cursor-pointer hover:bg-primary-dark"
          />
        </form>
      </div>
    </>
  );
};
