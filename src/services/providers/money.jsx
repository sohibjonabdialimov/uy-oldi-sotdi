import { createContext, useState } from "react";

export const moneyContext = createContext();

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState("");

  return (
    <moneyContext.Provider value={{ money, setMoney }}>
      {children}
    </moneyContext.Provider>
  );
};
