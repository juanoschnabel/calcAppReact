import React from "react";
import Result from "./components/Result";
import Button from "./components/Button";
import MathOperations from "./components/MathOperations";
import "./App.css";
const App = () => {
  const clickHandlerFunction = (text) => {
    console.log(text);
  };
  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <div className="numbers">
        <Button text="1" clickHandler={clickHandlerFunction} />
        <Button text="2" clickHandler={clickHandlerFunction} />
        <Button text="3" clickHandler={clickHandlerFunction} />
        <Button text="4" clickHandler={clickHandlerFunction} />
        <Button text="5" clickHandler={clickHandlerFunction} />
        <Button text="6" clickHandler={clickHandlerFunction} />
        <Button text="7" clickHandler={clickHandlerFunction} />
        <Button text="8" clickHandler={clickHandlerFunction} />
        <Button text="9" clickHandler={clickHandlerFunction} />
        <Button text="0" clickHandler={clickHandlerFunction} />
        {/* <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button> */}
      </div>
      <div className="functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <MathOperations
        onClickOperation={(operation) => console.log(operation)}
        onClickEqual={(equal) => console.log(equal)}
      />
      {/* <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div> */}
    </main>
  );
};

export default App;
