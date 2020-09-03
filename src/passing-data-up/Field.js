import React from 'react';

const Field = ({ label, name, type, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input 
            className="form-control"
            id={ name }
            name={ name }
            type={ type }
            value={ value }
            onChange={ handleChange }
        />
    </div>
);

export default Field;