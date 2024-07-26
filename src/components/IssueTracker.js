import React, { useState } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import './IssueTracker.css';

const IssueTracker = ({ onClose }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issue, setIssue] = useState('');
    const [message, setMessage] = useState('');

    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        setPosition({ x, y });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/issues/submit', {
                name,
                email,
                issue
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to submit issue');
        }
    };

    return (
        <Draggable>
            <div className="issue-tracker-card">
                <div className="handle"></div>
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="issue-tracker-icon">
                    <FaExclamationTriangle />
                </div>
                <h2 className="issue-tracker-title">Issue Tracker</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="issue">Issue</label>
                        <textarea
                            id="issue"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    {message && <div className="message">{message}</div>}
                </form>
            </div>
        </Draggable>
    );
};

export default IssueTracker;
