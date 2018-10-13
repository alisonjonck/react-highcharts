import React from 'react';

const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10
};

const Card = (props) => {
    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    );
};

export default Card;