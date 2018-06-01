import React from 'react';
import './../App.css';

const Hal = (props) => (
    <img src="https://media.giphy.com/media/wypKXPQggwaCA/giphy.gif" alt="Hal" className="hal" onClick={props.wakeUp} />
);

export default Hal;