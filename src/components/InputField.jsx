import { useUser } from "../context/UserContext";
import { handleChange } from "../utils/HandleChange";

export const InputField = ({ nameEl, type, length }) => {
  const { errors, setUser, setErrors, user } = useUser();
  const handleInputChange = (e) => handleChange(e, setUser, setErrors);
  return (
    <div className="my-[12px]">
      <label className={`my-[6px]`}>
        <span>
          {nameEl?.charAt(0)?.toUpperCase() + nameEl?.slice(1)}:{" "}
          <span className="text-red-500">*</span>
        </span>
        <input
          className={`w-full mt-[5px] border  ${
            errors[nameEl] ? "border-red-500" : "border-slate-400"
          } ${
            errors[nameEl] ? "outline-red-500" : "outline-primary-color"
          } px-[10px] py-[5px] text-[14px] rounded`}
          placeholder={`Enter ${nameEl}`}
          name={nameEl}
          type={type}
          value={user.nameEl}
          onChange={handleInputChange}
          maxLength={length}
        />
      </label>
    </div>
  );
};
