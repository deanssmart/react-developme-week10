import React from 'react';

const Field = ({ label, name, type, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={ label }>{ label }</label>
        <input 
            className="form-control"
            id={ label }
            name={ name }
            value={ value }
            onChange={ handleChange }
        />
    </div>
);

export default Field;