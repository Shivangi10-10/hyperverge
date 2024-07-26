import React from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import { SiGoogleforms } from 'react-icons/si';
import './GoogleForm.css';

const GoogleForm = ({ onClose }) => {
    return (
        <Draggable>
            <div className="google-form-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="google-form-header">
                    <div className="google-form-icon">
                        <SiGoogleforms />
                    </div>
                    <h2 className="google-form-title">Google Form</h2>
                </div>
                <div className="google-form-container">
                    <iframe
                        src="https://docs.google.com/forms/d/1PR-965sAWQ3-PIi3b-OLn0V8VkJ88i3yQ8s1DpIKpM0/viewform?embedded=true"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        className="google-form-iframe"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </Draggable>
    );
};

export default GoogleForm;