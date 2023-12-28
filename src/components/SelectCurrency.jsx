import React, { useState } from "react";
import closeIcon from "../assets/close.png";
import SelectCurrencyList from "./SelectCurrencyList";
const SelectCurrency = ({ setIsActive, setCurrencyName }) => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div
        className="items-center justify-between bg-[#27283E] rounded-md py-3 px-4 flex"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          name="currencyName"
          type="text"
          className="outline-none text-[20px] bg-transparent text-white w-full"
          placeholder="Type to search..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() => setIsActive((prev) => !prev)}>
          <img src={closeIcon} alt="x-mark" className="w-[20px]" />
        </button>
      </div>
      <div className="relative">
        <SelectCurrencyList
          setIsActive={setIsActive}
          setCurrencyName={setCurrencyName}
          inputText={inputText}
        />
      </div>
    </>
  );
};

export default SelectCurrency;
