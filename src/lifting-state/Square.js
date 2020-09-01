import React from 'react';

const Square = ({ colour, selected, handleClick }) => (
    <div 
    onClick={ handleClick }
    style={{
        height: 200,
        width: 200,
        backgroundColor: selected ? colour : Square.defaultProps.colour }}>
</div>
);

Square.defaultProps = {
    colour: "green",
};

export default Square;