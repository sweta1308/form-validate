import { contactValidation, emailValidation, nameValidation } from "./Validate";

export const handleSubmit = (e, user, captcha, errors, setErrors, navigate) => {
  e.preventDefault();
  const fields = ["name", "email", "state"];
  const newValidationErrors = fields.reduce((acc, field) => {
    if (!user[field].trim()) {
      acc[field] = "This field is required.";
    }
    if (captcha.captcha1 + captcha.captcha2 !== Number(user.captcha)) {
      acc.captcha = "Please provide correct value.";
    }
    return acc;
  }, {});
  setErrors(newValidationErrors);
  if (
    Object.keys(newValidationErrors).length > 0 ||
    Object.values(errors).some((item) => item.length > 0)
  ) {
    if (user.name) {
      nameValidation(user.name, setErrors);
    }
    if (user.email) {
      emailValidation(user.email, setErrors);
    }
    if (user.contact) {
      contactValidation(user.contact, setErrors);
    }
  } else {
    localStorage.setItem("data", JSON.stringify({ user }));
    navigate("/home");
    setErrors({ error: "", name: "", email: "", contact: "", captcha: "" });
  }
};
