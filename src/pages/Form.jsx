import { useNavigate } from "react-router-dom";
import { Captcha } from "../components/Captcha";
import { DropDown } from "../components/DropDown";
import { InputField } from "../components/InputField";
import { useUser } from "../context/UserContext";
import { data } from "../data/StateData";
import { Error } from "../components/Error";
import { handleChange } from "../utils/HandleChange";
import { handleSubmit } from "../utils/HandleSubmit";

export const Form = () => {
  const navigate = useNavigate();
  const { user, setUser, errors, setErrors, captcha } = useUser();
  const selectedState = data.find((state) => state.state === user.state);

  const handleInputChange = (e) => handleChange(e, setUser, setErrors);

  return (
    <>
      <div className="w-[420px] p-[30px] shadow-lg rounded xs:shadow-none xs:w-full xs:p-[0px] xs:px-[15px] xs:py-[20px] xs:mb-[20px]">
        <h1 className="font-extrabold text-[36px] text-center text-primary-dark mb-[20px]">
          Apply
        </h1>
        <form
          className="flex flex-col"
          onSubmit={(e) => handleSubmit(e, user, captcha, setErrors, navigate)}
        >
          <InputField
            name="name"
            type="text"
            value={user.name}
            handleChange={handleInputChange}
          />
          <Error>{errors?.name && errors.name}</Error>
          <InputField
            name="email"
            type="text"
            value={user.email}
            handleChange={handleInputChange}
          />
          <Error>{errors?.email && errors.email}</Error>
          <InputField
            name="contact"
            type="text"
            value={user.contact}
            handleChange={handleInputChange}
            length={"10"}
          />
          <Error>{errors?.contact && errors.contact}</Error>
          <DropDown nameEl="state" data={data.map((state) => state.state)} />
          <Error>{errors?.state && errors.state}</Error>
          <DropDown nameEl="district" data={selectedState?.districts} />
          <Error>{errors?.district && errors.district}</Error>
          <Captcha />
          <Error>{errors?.captcha && errors.captcha}</Error>
          <input
            type="submit"
            className="mt-[20px] bg-primary-color text-white py-[8px] rounded-md cursor-pointer hover:bg-primary-dark"
          />
        </form>
      </div>
    </>
  );
};
