import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    contact: 0,
    state: "",
    district: "",
    captcha: 0,
  });

  const captcha1 = Math.floor(Math.random() * 100);
  const captcha2 = Math.floor(Math.random() * 100);

  const value = { user, setUser, captcha1, captcha2 };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
