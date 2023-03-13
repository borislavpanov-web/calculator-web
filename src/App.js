import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    if (e.target.name === "%") {
      setResult(result.concat("%"));
      return
    }

    if (e.target.name === "&times;") {
      setResult(result.concat("*"));
      return
    }

    if (e.target.name === "&divide;") {
      setResult(result.concat("/"));
      return
    }
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

const calculate = () => {
  try {
    let expression = result.replace(/×/g, "*").replace(/%/g, "/100").replace(/÷/g, "/");
    setResult(String(eval(expression)).toString());
  } catch (error) {
    setResult("Error");
  }
};

  return (
    <>
    <div className="container">
      
      <form>
        <input type="text" value={result}/>
      </form>

      <div className="keypad">
        <button onClick={clear} id="clear">C</button>
        <button name='%' onClick={handleClick}id="percent">%</button>
        <button name='&divide;' onClick={handleClick} id="divide">÷</button>
        <button name='&times;' onClick={handleClick} id="multiply">&times;</button>
        <button name='-' onClick={handleClick} id="subtract">-</button>
        <button name='+' onClick={handleClick} id="multiply">+</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button onClick={calculate} id="result">=</button>
      </div>
    </div>
      <div className="author">
        <p>Created by <a href="https://github.com/borislavpanov-web">Borislav Panov</a></p>
      </div>
    </>
  )
}


