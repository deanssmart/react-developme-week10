import React, { useState } from 'react';

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);
    
    const updateCounterPos = () => {
        if(counter < max){
            setCounter(counter + 1);
        }
    }
    
    const updateCounterNeg = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }

    return (
        <div className="card row">
            <p className="text-center">{ counter }</p>
            <button className="btn btn-success" onClick={ updateCounterPos }>+</button>
            <button className="btn btn-danger" onClick={ updateCounterNeg }>-</button>
        </div>
    );

}

export default Counter;