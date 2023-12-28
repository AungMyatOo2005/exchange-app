import React, { useContext, useEffect, useState } from "react";
import CurrencyBox from "./CurrencyBox";
import { GlobalContext } from "../context/GlobalContext";
const ToCurrency = () => {
  const [currencyName, setCurrencyName] = useState("MMK");
  const { setToCurrency, currencyArray } = useContext(GlobalContext);

  useEffect(() => {
    const currentCurrency = currencyArray.find(
      (currency) => currency.name === currencyName
    );
    if (currentCurrency) {
      setToCurrency(currentCurrency);
    }
  }, [currencyArray, currencyName, setToCurrency]);
  return (
    <div className="flex flex-col cursor-pointer select-none">
      <label className="text-white font-roboto mb-2 text-[18px]">To</label>
      <CurrencyBox
        setCurrencyName={setCurrencyName}
        currencyName={currencyName}
      />
    </div>
  );
};

export default ToCurrency;
