export const validateContact = (contact) =>
  /^[0-9]+$/.test(contact) && contact.length <= 10;
export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
export const validateRequired = (nameEl, value) => value.trim() !== "";
