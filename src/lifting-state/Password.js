import React from 'react';

const Password = ({ label, value, handleChange, colour }) => (
    <div className="form-group">
        <label className="lead" htmlFor={ label }>{ label }</label>
        <input 
            id={ label }
            onChange={ handleChange }
            value={ value }
            type="password"
            className="form-control"
            style={{ borderColor: colour,
                     borderWidth: '2px' }}
        />
    </div> 
);

export default Password;