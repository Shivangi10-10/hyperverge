import React from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import './Notion.css';

const Notion = ({ onClose }) => {
    const notionUrl = 'https://www.notion.so/804f564309664ccdb0b6a13a2d436711';

    return (
        <Draggable>
            <div className="notion-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="notion-icon">
                    <SiNotion />
                </div>
                <h2 className="notion-title">Notion</h2>
                <a
                    href={notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="notion-link"
                >
                    Open Notion
                </a>
            </div>
        </Draggable>
    );
};

export default Notion;