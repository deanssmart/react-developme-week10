import React, { useState } from 'react';

const StepCounter = ({ step, max }) => {
    const [counter, setCounter] = useState(0);
    
    const updateCounterPos = () => {
        if(counter + step <= max){
            setCounter(counter + step);
        }
    }
    
    const updateCounterNeg = () => {
        if(counter - step >= 0){
            setCounter(counter - step);
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

export default StepCounter;