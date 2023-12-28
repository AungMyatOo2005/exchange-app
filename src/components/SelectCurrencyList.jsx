import React, { useContext } from "react";
import CurrencyCard from "./CurrencyCard";
import { GlobalContext } from "../context/GlobalContext";
const SelectCurrencyList = ({ setCurrencyName, setIsActive, inputText }) => {
  const { currencyArray } = useContext(GlobalContext);
  return (
    <div className="h-[200px] overflow-auto w-full absolute bg-[#27283E] right-0 top-3 rounded-sm toggle select_box">
      {currencyArray
        .filter((currency) => currency.name.includes(inputText.toUpperCase()))
        .map((currency, index) => (
          <CurrencyCard
            setIsActive={setIsActive}
            currency={currency}
            key={index}
            setCurrencyName={setCurrencyName}
          />
        ))}
    </div>
  );
};

export default SelectCurrencyList;
