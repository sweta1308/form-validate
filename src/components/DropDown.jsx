import { useUser } from "../context/UserContext";

export const DropDown = ({ data, nameEl }) => {
  const { user, setUser } = useUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <label className="my-[12px] flex flex-col">
        <span>
          {nameEl?.charAt(0)?.toUpperCase() + nameEl?.slice(1)}:{" "}
          <span className="text-red-500">*</span>
        </span>
        <select
          name={nameEl}
          value={user.nameEl}
          onChange={handleChange}
          className="w-full mt-[5px] border border-slate-400 outline-primary-color px-[10px] py-[5px] text-[14px] rounded"
        >
          <option value="">
            Select {nameEl?.charAt(0)?.toUpperCase() + nameEl?.slice(1)}
          </option>
          {data?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
