import React from 'react';
import "./Toggle.css"
import talk from './images/unmuted.png';
import notalk from './images/muted.png';

function Toggle({ isToggled, onToggle }) {
    return (
        <div className="toggle-container">
            <label class="toggle">
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                {isToggled ? <img className="toggle-img" src={talk} /> : <img className="toggle-img" src={notalk} />}
            </label >
        </div>
    );
};

export default Toggle;