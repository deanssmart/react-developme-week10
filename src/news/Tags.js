import React from 'react';

const Tags = ({ tags }) => (
    <span>
        { tags.map((tag, i) => (
            <span key={ i }className="badge badge-primary ml-2">{ tag }</span>
    )) }   
    </span>
);

export default Tags;