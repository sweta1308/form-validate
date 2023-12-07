import { useUser } from "../context/UserContext";

export const InputField = ({ name, type, length, value, handleChange }) => {
  const { errors } = useUser();
  return (
    <div className="my-[12px]">
      <label className={`my-[6px]`}>
        <span>
          {name?.charAt(0)?.toUpperCase() + name?.slice(1)}:{" "}
          <span className="text-red-500">*</span>
        </span>
        <input
          className={`w-full mt-[5px] border  ${
            errors[name] ? "border-red-500" : "border-slate-400"
          } ${
            errors[name] ? "outline-red-500" : "outline-primary-color"
          } px-[10px] py-[5px] text-[14px] rounded`}
          placeholder={`Enter ${name}`}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          maxLength={length}
        />
      </label>
    </div>
  );
};
