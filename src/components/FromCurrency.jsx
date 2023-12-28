import React, { useContext, useEffect, useState } from "react";
import CurrencyBox from "./CurrencyBox";
import { GlobalContext } from "../context/GlobalContext";

const FromCurrency = () => {
  const [currencyName, setCurrencyName] = useState("USD");
  const { setFromCurrency, currencyArray } = useContext(GlobalContext);

  useEffect(() => {
    const currentCurrency = currencyArray.find(
      (currency) => currency.name === currencyName
    );
    if (currentCurrency) {
      setFromCurrency(currentCurrency);
    }
  }, [currencyArray, currencyName, setFromCurrency]);
  return (
    <div className="flex flex-col cursor-pointer select-none">
      <label className="text-white font-roboto mb-2 text-[18px]">From</label>
      <CurrencyBox
        setCurrencyName={setCurrencyName}
        currencyName={currencyName}
      />
    </div>
  );
};

export default FromCurrency;
