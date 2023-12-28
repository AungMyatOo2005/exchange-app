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
        "http://data.fixer.io/api/latest?access_key=4674ad576e05a9d276f4508712e51c7d"
      );
      const data = resp.data.rates;
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
    <div className="w-[250px]">
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
