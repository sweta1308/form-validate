import { useNavigate } from "react-router-dom";
import { Captcha } from "../components/Captcha";
import { DropDown } from "../components/DropDown";
import { InputField } from "../components/InputField";
import { useUser } from "../context/UserContext";
import { data } from "../data/StateData";
import { Error } from "../components/Error";
import { handleSubmit } from "../utils/HandleSubmit";

export const Form = () => {
  const navigate = useNavigate();
  const { user, errors, setErrors, captcha } = useUser();
  const selectedState = data.find((state) => state.state === user.state);

  return (
    <>
      <div className="w-[420px] p-[30px] shadow-lg rounded xs:shadow-none xs:w-full xs:p-[0px] xs:px-[15px] xs:py-[5px] xs:mb-[20px]">
        <h1 className="font-extrabold text-[36px] text-center text-primary-dark mb-[20px]">
          Apply
        </h1>
        <form
          className="flex flex-col"
          onSubmit={(e) =>
            handleSubmit(e, user, captcha, errors, setErrors, navigate)
          }
        >
          <InputField name="name" type="text" />
          <Error>{errors?.name && errors.name}</Error>

          <InputField name="email" type="text" />
          <Error>{errors?.email && errors.email}</Error>

          <InputField name="contact" type="text" length={"10"} />
          <Error>{errors?.contact && errors.contact}</Error>

          <DropDown nameEl="state" data={data.map((state) => state.state)} />
          <Error>{errors?.state && errors.state}</Error>

          <DropDown nameEl="district" data={selectedState?.districts} />
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
