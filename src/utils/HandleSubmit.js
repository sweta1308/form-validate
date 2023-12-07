export const handleSubmit = (e, user, captcha, setErrors, navigate) => {
  e.preventDefault();
  if (
    user.name.length === 0 ||
    user.email.length === 0 ||
    user.contact.length === 0 ||
    user.state.length === 0 ||
    user.district.length === 0 ||
    user.captcha.length === 0
  ) {
    setErrors((prev) => ({ ...prev, error: "All fields are required." }));
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    setErrors((prev) => ({ ...prev, email: "Please provide a valid email." }));
  } else if (captcha.captcha1 + captcha.captcha2 !== Number(user.captcha)) {
    setErrors((prev) => ({
      ...prev,
      captcha: "Please provide correct value.",
    }));
  } else {
    localStorage.setItem("data", JSON.stringify({ user }));
    navigate("/home");
    setErrors({ error: "", name: "", email: "", contact: "", captcha: "" });
  }
};
