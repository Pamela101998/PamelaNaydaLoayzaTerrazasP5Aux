import './App.css';
import React, {useState} from 'react';

function App () {
const [number1, setNumber1] = useState ("");
const [number2, setNumber2] = useState ("");
const [operation, setOperation] = useState ("");
const [result, setResult] = useState (0);

function clear () {
  setNumber1 ("");
  setNumber2 ("");
  setOperation ("");
  setResult ("");
}

function clicNumber (valor) {
  if(operation === "") {
    setNumber1(number1 + valor);
  }
  else{
    setNumber2(number2 + valor);
  }
}
function clicOperation (valor) {
  setOperation(valor);
}

function resultado () {
  switch (operation) {
    case "+":
      setResult(Number(number1) + Number(number2));
      break;
    case "-":
      setResult(Number(number1) - Number(number2));
      break; 
    case "*":
      setResult(Number(number1) * Number(number2));
      break;
    case "/":
      setResult(Number(number1) / Number(number2));
      break;   
  }
}

  return (
    <div className="App">
      <div className="calc">
        <div className="output"> 
          <div className="prev">{result ? number1 + operation +  number2 : (operation ? number1 + operation : "")}</div>
          <div className="ant">{result ? result : (!operation ? number1 : number2)}</div>
        </div>
        <button onClick={clear} >AC</button>
        <button onClick={() => {clicOperation("/")}}>/</button>
        <button onClick={() => {clicOperation("*")}}>*</button>
        <button onClick={() => {clicOperation("-")}}>-</button>
        <button onClick={() => {clicNumber(7)}}>7</button>
        <button onClick={() => {clicNumber(8)}}>8</button>
        <button onClick={() => {clicNumber(9)}}>9</button> 
        <button onClick={() => {clicOperation("+")}} className="b">+</button>
        <button onClick={() => {clicNumber(4)}}>4</button>
        <button onClick={() => {clicNumber(5)}}>5</button>
        <button onClick={() => {clicNumber(6)}}>6</button>
        <button onClick={() => {clicNumber(1)}}>1</button>
        <button onClick={() => {clicNumber(2)}}>2</button>
        <button onClick={() => {clicNumber(3)}}>3</button>
        <button onClick={resultado} className="b">=</button>
        <button onClick={() => {clicNumber(0)}} className="c">0</button>
        <button onClick={() => {clicNumber(".")}}>.</button>
      </div>
    </div>
  );
}

export default App;
