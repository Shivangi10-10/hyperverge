import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaPlus, FaTrash, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs'; // Importing a notes icon
import './Notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');

    const handleAddNote = () => {
        if (note.trim()) {
            setNotes([...notes, { text: note, isExpanded: false }]);
            setNote('');
        }
    };

    const handleToggleNote = (index) => {
        const newNotes = [...notes];
        newNotes[index].isExpanded = !newNotes[index].isExpanded;
        setNotes(newNotes);
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <Draggable>
            <div className="notes-card">
                <div className="notes-icon">
                    <BsPencilSquare />
                </div>
                <h2 className="notes-title">Notes</h2>
                <div className="notes-input">
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write a note..."
                        className="notes-textarea"
                    />
                    <button onClick={handleAddNote} className="add-note-button">
                        <FaPlus />
                    </button>
                </div>
                <ul className="notes-list">
                    {notes.map((note, index) => (
                        <li key={index} className="note-item">
                            <div className="note-text">
                                {note.isExpanded ? note.text : note.text.substring(0, 30) + (note.text.length > 30 ? '...' : '')}
                            </div>
                            <div className="note-actions">
                                <button onClick={() => handleToggleNote(index)} className="toggle-button">
                                    {note.isExpanded ? <FaCompressAlt /> : <FaExpandAlt />}
                                </button>
                                <button onClick={() => handleDeleteNote(index)} className="delete-button">
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Draggable>
    );
};

export default Notes;