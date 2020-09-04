import React, { useReducer } from 'react';

//initial state
let initialState = {
    counter: 0
}

//reducer functions
const counterPos = (state, step, max) => {
    const { counter } = state;

    return counter + step <= max ? {...state, counter: counter + step} : state;     
};

const counterNeg = (state, step) => {
    const { counter } = state;

    return counter - step >= 0 ? {...state, counter: counter - step} : state;
};

//reducer
const reducer = (state, action) => {
    const { type, step, max } = action;

    switch (type) {
        case "POSITIVE": return counterPos(state, step, max);
        case "NEGATIVE": return counterNeg(state, step);
        default: return state;
    }    
};

export const StepCounter = ({ step, max }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { counter } = state;

    return (
        <div className="card row">
            <p className="text-center">{ counter }</p>
            <button 
                className="btn btn-success"
                onClick={ () => dispatch({ type: "POSITIVE", step: step, max: max }) }
            >
                +
            </button>
            <button 
                className="btn btn-danger" 
                onClick={ () => dispatch({ type: "NEGATIVE", step: step }) }
            >
                -
            </button>
        </div>
    );

}

