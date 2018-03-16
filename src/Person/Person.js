import React from 'react';

import './Person.css';
const person = props => {
    return (
        <div className="Person">
            <p>Hello, I'm {props.name}</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;