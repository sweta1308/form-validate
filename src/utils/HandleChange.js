import {
  contactValidation,
  emailValidation,
  nameValidation,
  validateRequired,
} from "./Validate";
import { debounce } from "./debounce";

export const handleChange = (e, setUser, setErrors) => {
  const { name, value } = e.target;
  if (!validateRequired(name, value)) {
    setErrors((prev) => ({
      ...prev,
      [name]: "This field is required!",
      contact: "",
    }));
  } else {
    if (name === "name") {
      nameValidation(value, setErrors);
    }

    if (name === "email") {
      debounce(() => emailValidation(value, setErrors), 1000)();
    }

    if (name === "contact") {
      contactValidation(value, setErrors);
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
