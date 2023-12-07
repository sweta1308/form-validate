import { useNavigate } from "react-router-dom";
import { Captcha } from "../components/Captcha";
import { DropDown } from "../components/DropDown";
import { InputField } from "../components/InputField";
import { useUser } from "../context/UserContext";
import { data } from "../data/StateData";
import {
  contactValidation,
  emailValidation,
  handleSubmit,
  nameValidation,
} from "../utils";
import { Error } from "../components/Error";

export const Form = () => {
  const navigate = useNavigate();
  const { user, setUser, errors, setErrors, captcha } = useUser();
  const selectedState = data.find((state) => state.state === user.state);

  return (
    <>
      <div className="w-[360px] p-[30px] shadow-lg rounded xs:w-[320px] xs:p-[0px] xs:px-[15px] xs:py-[20px]">
        <h1 className="font-extrabold text-[36px] text-center text-primary-dark mb-[20px]">
          Apply
        </h1>
        <Error>{errors.error && errors.error}</Error>
        <form
          className="flex flex-col"
          onSubmit={(e) => handleSubmit(e, user, captcha, setErrors, navigate)}
        >
          <InputField
            name="name"
            type="text"
            value={user.name}
            handleChange={(e) => nameValidation(e, setUser, setErrors)}
          />
          <Error>{errors?.name && errors.name}</Error>
          <InputField
            name="email"
            type="text"
            value={user.email}
            handleChange={(e) => emailValidation(e, setUser, setErrors)}
          />
          <Error>{errors?.email && errors.email}</Error>
          <InputField
            name="contact"
            type="text"
            value={user.contact}
            handleChange={(e) => contactValidation(e, setUser, setErrors)}
          />
          <Error>{errors?.contact && errors.contact}</Error>
          <div className="flex justify-between gap-1">
            <DropDown nameEl="state" data={data.map((state) => state.state)} />
            <DropDown nameEl="district" data={selectedState?.districts} />
          </div>
          <Captcha />
          <Error>{errors?.captcha && errors.captcha}</Error>
          <input
            type="submit"
            className="mt-[30px] bg-primary-color text-white py-[8px] rounded-md cursor-pointer hover:bg-primary-dark"
          />
        </form>
      </div>
    </>
  );
};
