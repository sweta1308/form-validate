import { useUser } from "../context/UserContext";

export const Captcha = () => {
  const { captcha, user, setUser, setErrors } = useUser();
  const { captcha1, captcha2 } = captcha;
  return (
    <div>
      <h2 className="my-[8px] font-bold text-primary-color">Captcha</h2>
      <div className="flex justify-between items-center gap-2">
        <span className="text-primary-color font-semibold bg-primary-light px-[9px] py-[2px] rounded">
          {captcha1}
        </span>{" "}
        <span className="text-gray-color font-semibold">+</span>{" "}
        <span className="text-primary-color font-semibold bg-primary-light px-[9px] py-[2px] rounded">
          {captcha2}
        </span>{" "}
        <span className="text-gray-color font-semibold">=</span>
        <input
          name="captcha"
          onChange={(e) => {
            setUser({ ...user, captcha: e.target.value });
            setErrors((prev) => ({ ...prev, captcha: "" }));
          }}
          value={user.captcha}
          type="number"
          className="w-full border border-slate-400 outline-primary-color px-[10px] py-[5px] text-[12px] rounded"
          placeholder="Enter sum..."
        />
      </div>
    </div>
  );
};
