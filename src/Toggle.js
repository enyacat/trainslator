import React from 'react';
import "./Toggle.css"
import talk from './images/talk-svgrepo-com.svg';
import notalk from './images/NoTalk.svg';

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