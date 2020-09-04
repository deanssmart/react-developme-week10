import React, { useReducer } from 'react';

//initial state
let initialState = {
    fahrenheit: "32",
    celsius: "0"
};

//reducer functions
const fahrenheit = (state, {temp}) => {

    return { 
        ...state,
        fahrenheit: temp,
        celsius: ((+temp - 32) / 1.8).toFixed(2),
    }
};

const celsius = (state, {temp}) => {

    return { 
        ...state,
        celsius: temp,
        fahrenheit: (+temp * 1.8 + 32).toFixed(2),
    }
};

//reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "FAHRENHEIT": return fahrenheit(state, action);
        case "CELSIUS": return celsius(state, action);
        default: return state;
    }
};

//component 
export const TempConverter = ({labelF, nameF, labelC, nameC}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { fahrenheit, celsius } = state;

    return(
        <div className="form-group">
            <label className="lead">{ labelF }</label>
            <input
                type="number" 
                onChange={ (e) => dispatch({ type: "FAHRENHEIT", temp: e.currentTarget.value }) }
                name={ nameF }
                value={ fahrenheit }
                className="form-control"
            />
            <label className="lead">{ labelC }</label>
            <input 
                type="number"
                onChange={ (e) => dispatch({ type: "CELSIUS", temp: e.currentTarget.value }) }
                name={ nameC }
                value={ celsius }
                className="form-control"
            />    
        </div>      
    );
}; 

export default TempConverter;

