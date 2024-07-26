import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaPoll, FaPlus, FaVoteYea } from 'react-icons/fa';
import './Poll.css';

const Poll = ({ onClose }) => {
    const [poll, setPoll] = useState('');
    const [options, setOptions] = useState(['']);
    const [votes, setVotes] = useState([0]);

    const handleAddOption = () => {
        if (options.length < 3) {
            setOptions([...options, '']);
            setVotes([...votes, 0]);
        }
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    return (
        <Draggable>
            <div className="poll-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="poll-icon">
                    <FaPoll />
                </div>
                <h2 className="poll-title">Poll</h2>
                <input
                    type="text"
                    value={poll}
                    onChange={(e) => setPoll(e.target.value)}
                    placeholder="Question..."
                    className="poll-question-input"
                />
                <div className="poll-options">
                    {options.map((option, index) => (
                        <div key={index} className="option-container">
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                                className="option-input"
                            />
                            <button
                                onClick={() => handleVote(index)}
                                className="vote-button"
                            >
                                <FaVoteYea />
                            </button>
                        </div>
                    ))}
                </div>
                {options.length < 3 && (
                    <button
                        onClick={handleAddOption}
                        className="add-option-button"
                    >
                        <FaPlus /> Add Option
                    </button>
                )}
            </div>
        </Draggable>
    );
};

export default Poll;