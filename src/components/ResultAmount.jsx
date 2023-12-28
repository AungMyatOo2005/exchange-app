import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ResultAmount = ({ amount }) => {
  const { fromCurrency, toCurrency } = useContext(GlobalContext);
  const [result, setResult] = useState();
  const [fromOneUnit, setFromOneUnit] = useState();
  const [toOneUnit, setToOneUnit] = useState();
  useEffect(() => {
    const resultAmount = () => {
      if (toCurrency && fromCurrency) {
        const baseCurrency = amount / fromCurrency.rate;
        const totalAmount = baseCurrency * toCurrency.rate;
        setResult(totalAmount);
        const fromOneUnit = 1 / fromCurrency.rate;
        const fromOneUnitResult = fromOneUnit * toCurrency.rate;
        setFromOneUnit(fromOneUnitResult);
        const toOneUnit = 1 / toCurrency.rate;
        const toOneUnitResult = toOneUnit * fromCurrency.rate;
        setToOneUnit(toOneUnitResult);
      }
    };
    resultAmount();
  }, [toCurrency, fromCurrency, amount]);

  return (
    <>
      <h1 className="font-roboto text-[32px] text-white">
        <span>{result && result.toFixed(5)}</span>
        <span> {toCurrency && toCurrency.name}</span>
      </h1>
      <p className="text-white font-roboto mt-2">{`1 ${
        fromCurrency && fromCurrency.name
      }=${fromOneUnit && fromOneUnit.toFixed(5)} ${
        toCurrency && toCurrency.name
      }`}</p>
      <p className="text-white font-roboto mt-2">{`1 ${
        toCurrency && toCurrency.name
      }=${toOneUnit && toOneUnit.toFixed(5)} ${
        fromCurrency && fromCurrency.name
      }`}</p> 
    </>
  );
};

export default ResultAmount;
