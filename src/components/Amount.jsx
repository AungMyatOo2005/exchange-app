import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ResultAmount from "./ResultAmount";

const Amount = () => {
  const [amount, setAmount] = useState(100);
  const { fromCurrency } = useContext(GlobalContext);
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="amount"
        className="text-white font-roboto mb-2 text-[18px]"
      >
        Amount
      </label>
      <div className="bg-[#27283E] rounded-md flex items-center px-4 w-full">
        <input
          id="amount"
          type="number"
          className="outline-none py-3 text-[20px] bg-transparent text-white w-full"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p className="text-[20px] text-white" id="amount_text">
          {fromCurrency && fromCurrency.name}
        </p>
      </div>
      <div className="mt-3">
        <ResultAmount amount={amount} />
      </div>
    </div>
  );
};

export default Amount;
