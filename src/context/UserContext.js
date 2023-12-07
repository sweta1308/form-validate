import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const username = JSON.parse(localStorage.getItem("data"));
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    state: "",
    district: "",
    captcha: 0,
  });

  const [errors, setErrors] = useState({
    error: "",
    name: "",
    email: "",
    contact: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState({
    captcha1: 0,
    captcha2: 0,
  });

  useEffect(() => {
    setCaptcha({
      ...captcha,
      captcha1: Math.floor(Math.random() * 100),
      captcha2: Math.floor(Math.random() * 100),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { user, setUser, captcha, errors, setErrors, username };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
