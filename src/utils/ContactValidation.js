export const contactValidation = (e, setUser, setErrors) => {
  const { value } = e.target;
  if (value.length === 0) {
    setErrors((prev) => ({ ...prev, contact: "This is a required field." }));
  } else if (!/^[0-9]+$/.test(value)) {
    setErrors((prev) => ({
      ...prev,
      contact: "Contact should only contain numbers.",
    }));
  } else if (value.length > 10) {
    setErrors((prev) => ({
      ...prev,
      contact: "Contact should not be more than 10 characters.",
    }));
  } else {
    setUser((prev) => ({ ...prev, contact: value }));
    setErrors((prev) => ({ ...prev, contact: "" }));
  }
};
