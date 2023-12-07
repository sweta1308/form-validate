export const nameValidation = (e, setUser, setErrors) => {
  const { value } = e.target;
  if (!value.match(/^[A-Za-z\s]+$/)) {
    setErrors((prev) => ({
      ...prev,
      name: "Name can only contain alphabets.",
    }));
  } else {
    setErrors((prev) => ({ ...prev, name: "" }));
  }
  const nameValue = value.replace(/[^a-zA-Z\s]/g, "");
  if (nameValue.length === 0) {
    setErrors((prev) => ({ ...prev, name: "This is a required field." }));
  } else {
    setUser((prev) => ({ ...prev, name: nameValue }));
  }
};
