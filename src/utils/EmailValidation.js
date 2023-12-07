export const emailValidation = (e, setUser, setErrors) => {
  const { value } = e.target;
  if (!value) {
    setErrors((prev) => ({ ...prev, email: "This is a required field." }));
  } else {
    setUser((prev) => ({ ...prev, email: value }));
    setErrors((prev) => ({ ...prev, email: "" }));
  }
};
