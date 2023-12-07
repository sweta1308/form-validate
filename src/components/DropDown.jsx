import { useUser } from "../context/UserContext";

export const DropDown = ({ data, nameEl }) => {
  const { user, setUser } = useUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <label className="my-[6px] flex flex-col">
        <span>{nameEl?.charAt(0)?.toUpperCase() + nameEl?.slice(1)}: </span>
        <select
          required
          name={nameEl}
          value={user.nameEl}
          onChange={handleChange}
          className="w-[145px] border border-slate-400 outline-none px-[10px] py-[5px] text-[12px] rounded"
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
