const validateContact = (contact) =>
  /^[0-9]+$/.test(contact) && contact.length <= 10;
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

export const validateRequired = (nameEl, value) => value.trim() !== "";

export const nameValidation = (value, setErrors) => {
  if (!validateName(value)) {
    setErrors((prev) => ({
      ...prev,
      name: "Name should contain only alphabets.",
    }));
  } else {
    setErrors((prev) => ({ ...prev, name: "" }));
  }
};

export const emailValidation = (value, setErrors) => {
  if (!validateEmail(value)) {
    setErrors((prev) => ({
      ...prev,
      email: "Please provide a valid email.",
    }));
  } else {
    setErrors((prev) => ({ ...prev, email: "" }));
  }
};

export const contactValidation = (value, setErrors) => {
  if (!validateContact(value)) {
    setErrors((prev) => ({
      ...prev,
      contact: "Contact should contain only numbers and maximum 10 characters.",
    }));
  } else {
    setErrors((prev) => ({ ...prev, contact: "" }));
  }
};
