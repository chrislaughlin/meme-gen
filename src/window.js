import React from 'react';
import PropTypes from 'prop-types';

const Window = ({ children }) => {
    return (
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">Hello Drunk Meme</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    );
};

export default Window;

