import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import SelectCurrency from "./SelectCurrency";
import { GlobalContext } from "../context/GlobalContext";
const CurrencyBox = ({ setCurrencyName, currencyName }) => {
  const [isActive, setIsActive] = useState(false);
  const { currencyArray, setCurrencyArray } = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        "https://v6.exchangerate-api.com/v6/4528ed4c290e470da21c792e/latest/USD"
      );
      const data = resp.data.conversion_rates;
      setCurrencyArray(
        Object.entries(data).map(([name, rate]) => ({
          name,
          rate,
        }))
      );
    };
    getData();
  }, []);
  window.addEventListener("click", () => {
    setIsActive(false);
  });
  return (
    <div className="w-full">
      {!isActive ? (
        <div
          className="flex items-center gap-2 bg-[#27283E] rounded-md py-2 px-4"
          onClick={(e) => {
            setIsActive((prev) => !prev);
            e.stopPropagation();
          }}
        >
          <img
            src={`https://flagsapi.com/${currencyName.slice(0, 2)}/flat/64.png`}
            alt="flag"
            width="40px"
          />
          <p className="text-white font-roboto">{currencyName}</p>
        </div>
      ) : (
        <SelectCurrency
          setIsActive={setIsActive}
          setCurrencyName={setCurrencyName}
        />
      )}
    </div>
  );
};

export default CurrencyBox;
