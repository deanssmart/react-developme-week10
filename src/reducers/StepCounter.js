import React, { useReducer } from 'react';

//initial state
let initialState = {
    counter: 0
};

//reducer functions
const counterPos = (state, {step, max}) => {
    const { counter } = state;
    const total = counter + step;

    return total <= max ? {...state, counter: total} : state;     
};

const counterNeg = (state, {step}) => {
    const { counter } = state;
    const total = counter - step;

    return total >= 0 ? {...state, counter: total} : state;
};

//reducer
const reducer = (state, action) => {

    switch (action.type) {
        case "POSITIVE": return counterPos(state, action);
        case "NEGATIVE": return counterNeg(state, action);
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

