import React, { useState } from 'react';
import PropTypes from 'prop-types';
const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = (operation) => {
          setCounter(counter + 1);
        //setCounter( (c)=> c+1);
    }
    const handlerReset = () => {
          setCounter(value);
    }
    const handlerSubs = () => {
        setCounter(counter - 1);
  }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handlerReset}>Reset</button>
            <button onClick={handlerSubs}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp;