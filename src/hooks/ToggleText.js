import React, { useState } from 'react';

const ToggleText = ({ initial, alternate }) => {
    const [toggle, setToggle] = useState(false);
    const updateToggle = () => setToggle(!toggle);

    const text = toggle ? alternate : initial;

    return (
        <div className="card">
            <p className="text-center">{ text }</p>
            <button className="btn btn-success"  onClick={ updateToggle }>Toggle</button>
        </div>
    );
}

export default ToggleText;