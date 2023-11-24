/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Result from "./components/Result";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import "./App.css";
const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const valueResult = items.length > 0 ? items[items.length - 1] : "0";
  console.log(valueResult);
  return (
    <main className="react-calculator">
      <Result value={valueResult} />
      <Numbers
        onClickNumber={(number) => {
          console.log(number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("content clear");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("delete");
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log(operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          if (stack.length > 0) {
            console.log(equal);
            setStack(eval(stack));
          }
        }}
      />
    </main>
  );
};

export default App;
