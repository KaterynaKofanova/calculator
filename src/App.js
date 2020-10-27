import './App.css';
import React, {useState} from 'react'

const App = () => {
  const [display, setDisplay] = useState('0')

  const handleChange = (value) => {
    if (display === '0'){
      switch(value){
        case '+':
          setDisplay(display+value)
          break
        case '-':
          setDisplay(display+value)
          break
        case '*':
          setDisplay(display+value)
          break
        case '/':
          setDisplay(display+value)
          break
        case '.':
          setDisplay(display+value)
          break
        case '0':
          setDisplay(value)
          break
        default:
          setDisplay(value)
      }
    }else{
      setDisplay(display+value)
    }
  }
  return (
    <div className="container">
      <div className="calculator">
        <div className="calc_display">
          {display}
        </div>
          <div className="calc_keys">
            <button className="operator plus" onClick={() => handleChange('+')}>+</button>
            <button className="operator minus" onClick={() => handleChange('-')}>-</button>
            <button className="operator times" onClick={() => handleChange('*')}>&times;</button>
            <button className="operator divide" onClick={() => handleChange('/')}>÷</button>
            <button className="number one" onClick={() => handleChange('1')}>1</button>
            <button className="number two" onClick={() => handleChange('2')}>2</button>
            <button className="number three" onClick={() => handleChange('3')}>3</button>
            <button className="number four" onClick={() => handleChange('4')}>4</button>
            <button className="number five" onClick={() => handleChange('5')}>5</button>
            <button className="number six" onClick={() => handleChange('6')}>6</button>
            <button className="number seven" onClick={() => handleChange('7')}>7</button>
            <button className="number eight" onClick={() => handleChange('8')}>8</button>
            <button className="number nine" onClick={() => handleChange('9')}>9</button>
            <button className="number zero" onClick={() => handleChange('0')}>0</button>
            <button className="number decimal" onClick={() => handleChange('.')}>.</button>
            <button className="number clear" onClick={() => setDisplay('0')}>AC</button>
            <button className="equal"onClick={() => setDisplay(eval(display).toString())}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
