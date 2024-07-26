import React from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaTable } from 'react-icons/fa'; // Use a suitable icon for spreadsheets
import './GoogleSpreadsheet.css';

const GoogleSpreadsheet = ({ onClose }) => {
    return (
        <Draggable>
            <div className="google-spreadsheet-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="google-spreadsheet-icon">
                    <FaTable />
                </div>
                <h2 className="google-spreadsheet-title">Google Spreadsheet</h2>
                <iframe
                    src="https://docs.google.com/spreadsheets/d/1lKjOvgY3KU75fF5xd-iW7l-WQ1OnZlOywCCrFGa1_2c/edit?gid=1177435256#gid=1177435256"
                    frameBorder="0"
                    className="google-spreadsheet-iframe"
                    allowFullScreen
                ></iframe>
            </div>
        </Draggable>
    );
};

export default GoogleSpreadsheet;
