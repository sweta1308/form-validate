import {
  validateContact,
  validateEmail,
  validateName,
  validateRequired,
} from "./Validate";

export const handleChange = (e, setUser, setErrors) => {
  const { name, value } = e.target;
  if (!validateRequired(name, value)) {
    setErrors((prev) => ({ ...prev, [name]: "This field is required!" }));
  } else {
    if (name === "name") {
      if (!validateName(value)) {
        setErrors((prev) => ({
          ...prev,
          name: "Name should contain only alphabets.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please provide a valid email.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "contact") {
      if (!validateContact(value)) {
        setErrors((prev) => ({
          ...prev,
          contact:
            "Contact should contain only numbers and maximum 10 characters.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, contact: "" }));
      }
    }
  }
  if (name === "name") {
    const nameValue = value.replace(/[^a-zA-Z\s]/g, "");
    setUser((prev) => ({ ...prev, name: nameValue }));
  } else if (name === "email") {
    setUser((prev) => ({ ...prev, email: value }));
  } else if (name === "contact") {
    const contactValue = value.replace(/[^0-9]/g, "");
    setUser((prev) => ({ ...prev, contact: contactValue }));
  } else if (name === "state" || name === "district") {
    setUser((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }
};
