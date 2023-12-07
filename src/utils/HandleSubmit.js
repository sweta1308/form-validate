export const handleSubmit = (e, user, captcha, setErrors, navigate) => {
  e.preventDefault();
  const fields = Object.keys(user).slice(0, 5);
  const newValidationErrors = fields.reduce((acc, field) => {
    if (!user[field].trim()) {
      acc[field] = "This field is required.";
    }
    return acc;
  }, {});
  setErrors(newValidationErrors);
  if (captcha.captcha1 + captcha.captcha2 !== Number(user.captcha)) {
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
