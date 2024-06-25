import React, { useId } from "react";

function InputBox({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className=" w-1-2">
        <label htmlFor={id} className=" text-black/40 inline-block mb-2">
          {lable}
        </label>
        <input
          id={id}
          type="number"
          className=" outline-none bg-transparent py-1.5 w-full"
          placeholder="amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className=" w-1-2 flex flex-wrap justify-end text-right">
        <p className=" text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className=" rounded-lg py-1 px-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;