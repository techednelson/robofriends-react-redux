import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid #2EA0D6', height: '800px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;