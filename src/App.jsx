import React from "react";
import "./App.css";
import ContextProvider from "./context/GlobalContext";
import Amount from "./components/Amount";
import FromCurrency from "./components/FromCurrency";
import ToCurrency from "./components/ToCurrency";
const App = () => {
  return (
    <ContextProvider>
      <div className="py-16 px-10 min-h-screen w-full bg-[#171826]">
        <div className="bg-[#1F2032] p-10 rounded-lg">
          <h1 className="text-white text-[44px] font-roboto">Money Exchange</h1>
          <div className="pt-10 flex items-start justify-between">
            <Amount />
            <FromCurrency/>
            <ToCurrency/>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
