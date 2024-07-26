import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaStickyNote, FaPlus } from 'react-icons/fa';
import './GoogleKeep.css';

const GoogleKeep = () => {
    const [note, setNote] = useState({
        title: "Sample Note Title",
        content: "This is a sample note content from Google Keep."
    });

    const noteUrl = "https://keep.google.com/u/1/#NOTE/13bIp6CLmmyl3PEZjBn5QeV8GcdHIGpgNauisXIuqBMrnYgS-0y4FLFkuc1xjD8E";

    const createNewNote = () => {
        window.open('https://keep.google.com/#create', '_blank');
    };

    return (
        <Draggable>
            <div className="google-keep-card">
                <div className="keep-icon">
                    <FaStickyNote />
                </div>
                <h2 className="keep-title">Google Keep</h2>
                <div className="keep-note">
                    <h3 className="note-title">{note.title}</h3>
                    <p className="note-content">{note.content}</p>
                </div>
                <div className="keep-controls">
                    <a
                        href={noteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="keep-button"
                    >
                        Open Note
                    </a>
                    <button onClick={createNewNote} className="keep-button create-note-button">
                        <FaPlus /> Create New Note
                    </button>
                </div>
            </div>
        </Draggable>
    );
};

export default GoogleKeep;