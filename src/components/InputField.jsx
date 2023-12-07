export const InputField = ({ name, type, length, value, handleChange }) => {
  return (
    <div className="my-[12px]">
      <label className={`my-[6px]`}>
        <span>
          {name?.charAt(0)?.toUpperCase() + name?.slice(1)}:{" "}
          <span className="text-red-500">*</span>
        </span>
        <input
          className="w-full mt-[5px] border border-slate-400 outline-primary-color px-[10px] py-[5px] text-[14px] rounded"
          placeholder={`Enter ${name}`}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
