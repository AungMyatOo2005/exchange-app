import { createContext, useState } from "react";

export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState();
  const [currencyArray, setCurrencyArray] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        currencyArray,
        setCurrencyArray,
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;
