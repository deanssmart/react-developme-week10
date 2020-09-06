import React, { useReducer } from 'react';

// initial state
const initialState = {
    clicked: false
};

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return {
            ...state,
            clicked: true,
        };
        default: return state;
    }
};

// component
export const Clicked = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { clicked } = state;

    return(
        <p onClick={ () => dispatch({ type: "CLICKED" }) }>
            { clicked ? "Clicked" : "Not Clicked"}
        </p>
    );
};

