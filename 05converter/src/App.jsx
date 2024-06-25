import { useState } from "react";
import useCurrencyInfo from "./hook/useCurrencyInfo";
import { InputBox } from "./components";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  const swap = () => {
    const newFrom = to;
    const newTo = from;
    const newAmount = convertedAmount;

    setFrom(newFrom);
    setTo(newTo);
    setAmount(newAmount);
    setConvertedAmount(amount); // Swap the amounts
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              selectedCurrency={from}
            />
          </div>

          <div className="w-full mb-1">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              onAmountChange={(amount) => {
                setConvertedAmount(amount);
              }}
              selectedCurrency={to}
              amountDisabled={true} // Disable amount input for "To"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={swap}
            className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg mt-2"
          >
            Swap {from.toUpperCase()} and {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
