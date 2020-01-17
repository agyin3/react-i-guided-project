import React, { useState } from 'react';

const Multiply = () => {
  const [multipyCount, setMultiplyCount] = useState(1)

  const multipy2 = e => {
    e.preventDefault()
    return multipyCount < 1000 ? setMultiplyCount(multipyCount * 2) : setMultiplyCount(multipyCount)
  }
  const multiply5 = e => {
    e.preventDefault()
    return multipyCount < 1000 ? setMultiplyCount(multipyCount * 5) : setMultiplyCount(multipyCount)
  }

  const reset = e => {
      e.preventDefault()
      setMultiplyCount(1)
  }
  
  return (
    <div className="count-wrapper">
      <p className={multipyCount < 1000 ? 'small-number' : 'large-number'}>{multipyCount}</p>
      <div>
        <button onClick={multipy2}>Multiply 2</button>
        <button onClick={multiply5}>Multiply 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Multiply;
