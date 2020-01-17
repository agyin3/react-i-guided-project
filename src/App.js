import React, { useState } from 'react';
import Multiply from './Multiply.js'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const add5 = e => {
    e.preventDefault()
    setCount(count + 5)
  }
  const add10 = e => {
    e.preventDefault()
    setCount(count + 10)
  }
  const sub5 = e => {
    e.preventDefault()
    return count > 5 ? setCount(count - 5) : setCount(0)
  }
  const sub10 = e => {
    e.preventDefault()
    return count > 10 ? setCount(count - 10) : setCount(0)
  }

  const reset = e => {
    e.preventDefault()
    setCount(0)
  }
  return (
    <div className="App">
      <div className='count-wrapper'>
      <p className={count < 100 ? 'small-number' : 'large-number'}>{count}</p>
      <div>
        <button onClick={add5}>Add 5</button>
        <button onClick={add10}>Add 10</button>
        <button onClick={sub5}>Sub 5</button>
        <button onClick={sub10}>Sub 10</button>
        <button onClick={reset}>Reset</button>
      </div>
      </div>
      <Multiply />
    </div>
  );
}

export default App;
