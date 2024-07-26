import React from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaFilePowerpoint } from 'react-icons/fa'; // Corrected import statement
import './GoogleSlides.css';

const GoogleSlides = ({ onClose }) => {
    return (
        <Draggable>
            <div className="google-slides-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="google-slides-icon">
                    <FaFilePowerpoint />
                </div>
                <h2 className="google-slides-title">Google Slides</h2>
                <iframe
                    src="https://docs.google.com/presentation/d/11RMnQH_WJIxMIJpsaig9O3AtnuuuVL5emaL9-4VahQs/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    className="google-slides-iframe"
                    allowFullScreen
                ></iframe>
            </div>
        </Draggable>
    );
};

export default GoogleSlides;
