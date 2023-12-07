export const InputField = ({ name, type, length, value, handleChange }) => {
  return (
    <div className="my-[5px]">
      <label className={`my-[6px]`}>
        <span>{name?.charAt(0)?.toUpperCase() + name?.slice(1)}: </span>
        <input
          className="w-full border border-slate-400 outline-none px-[10px] py-[5px] text-[12px] rounded"
          placeholder={`Enter ${name}...`}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          maxLength={length}
          required
        />
      </label>
    </div>
  );
};
