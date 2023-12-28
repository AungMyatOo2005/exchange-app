import React from "react";
import "./App.css";
import ContextProvider from "./context/GlobalContext";
import Amount from "./components/Amount";
import FromCurrency from "./components/FromCurrency";
import ToCurrency from "./components/ToCurrency";
const App = () => {
  return (
    <ContextProvider>
      <div className="py-16 px-5 sm:px-10 min-h-screen w-full bg-[#171826]">
        <div className="bg-[#1F2032] px-5 sm:px-10 py-10  rounded-lg">
          <h1 className="text-white text-[44px] font-roboto">Money Exchange</h1>
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="sm:block hidden">
              <Amount />
            </div>
            <FromCurrency />
            <ToCurrency />
            <div className="sm:hidden block">
              <Amount />
            </div>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
