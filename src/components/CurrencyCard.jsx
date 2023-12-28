import React from "react";

const CurrencyCard = ({ currency, setCurrencyName, setIsActive }) => {
  const flagName = currency.name.slice(0, 2);
  let flagSrc = `https://flagsapi.com/${flagName}/flat/64.png`;
  if (flagName === "EU") {
    flagSrc =
      "https://i.pinimg.com/236x/8c/e0/27/8ce027aabfc660d613bc1fe17b00fa67.jpg";
  } else if (["XA", "XO", "XP", "XD", "XC"].includes(flagName)) {
    flagSrc =
      "https://i.pinimg.com/564x/89/2c/b0/892cb054acf9bb679da263598540f7b1.jpg";
  }
  return (
    <div
      className="flex items-center justify-between px-3 py-2 border-b border-gray-300 last:border-none"
      onClick={(e) => {
        e.stopPropagation();
        setIsActive((prev) => !prev);
        setCurrencyName(currency.name);
      }}
    >
      <img src={flagSrc} className="w-[40px]" />
      <p className="text-white text-[14px]">{currency.name}</p>
    </div>
  );
};

export default CurrencyCard;
