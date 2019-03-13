import React from 'react';

const Formula = ({ img, title, height, value, valueOffset }) => (
    <div className="formula-container">
        <div className="title">{title}:</div>
        <div className="formula">
            <img src={img} alt={title} height={height} title={title} />
            <div className="value"
                 style={{top: + valueOffset + "px"}}
            >
                {value}
            </div>
        </div>
    </div>
);

export default Formula;