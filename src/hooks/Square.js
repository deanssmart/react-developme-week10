import React, { useState } from 'react';

const Square = ({ colour }) => {
    const [clicked, setClicked] = useState(false);
    const updateClicked = () => setClicked(!clicked);

    const background = clicked ? colour : Square.defaultProps.colour; 

    return(
        <div 
            onClick={ updateClicked }
            style={{
                height: 200,
                width: 200,
                backgroundColor: background }}>
        </div>
    );
}

Square.defaultProps = {
    colour: "green",
};

export default Square;