import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [number, setNumber] = useState(0);
  const handelInput = (no) => setNumber(no);
  const unitHandel = (label, id) => {
    if (label == "From") {
      setFrom(id);

      return;
    }
    setTo(id);
  };
  const handelResult = () => {
    if (from == to) {
      setNumber(number);
      return;
    }
    const operation = number * (from / to);

    setResult(operation);
  };

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label={"Amount"} onChange={handelInput} />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label={"From"} items={units} onChange={unitHandel} />
          <Select label={"To"} items={units} onChange={unitHandel} />

          <button onClick={handelResult}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
