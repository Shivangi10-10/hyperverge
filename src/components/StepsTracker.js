import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs'; // Example icon
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './StepsTracker.css'; // Import the CSS

const StepsTracker = ({ onClose }) => {
    const [steps, setSteps] = useState([]);
    const [dailySteps, setDailySteps] = useState('');
    const [goal, setGoal] = useState(5000); // Default step goal

    useEffect(() => {
        const savedSteps = JSON.parse(localStorage.getItem('stepsData')) || [];
        setSteps(savedSteps);
    }, []);

    useEffect(() => {
        localStorage.setItem('stepsData', JSON.stringify(steps));
    }, [steps]);

    const handleAddSteps = () => {
        if (dailySteps.trim()) {
            const today = new Date().toLocaleDateString();
            setSteps([...steps, { date: today, steps: parseInt(dailySteps) }]);
            setDailySteps('');
        }
    };

    const totalSteps = steps.reduce((total, entry) => total + entry.steps, 0);
    const percentage = Math.min((totalSteps / goal) * 100, 100);

    return (
        <Draggable>
            <div className="steps-tracker notion-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="notion-icon">
                    <BsFillPersonFill />
                </div>
                <h2 className="notion-title">Steps Tracker</h2>
                <div className="input-container">
                    <input
                        type="number"
                        value={dailySteps}
                        onChange={(e) => setDailySteps(e.target.value)}
                        placeholder="Enter daily steps"
                        className="input-field"
                    />
                    <button
                        onClick={handleAddSteps}
                        className="add-button"
                    >
                        Add
                    </button>
                </div>
                <ul className="steps-list">
                    {steps.map((entry, index) => (
                        <li key={index} className="step-item">
                            <span>{entry.date}</span>
                            <span>{entry.steps} steps</span>
                        </li>
                    ))}
                </ul>
                {steps.length > 0 && (
                    <div className="total-steps">
                        <p>Total Steps: {totalSteps}</p>
                    </div>
                )}
                <div className="progress-bar">
                    <CircularProgressbar
                        value={percentage}
                        text={`${Math.round(percentage)}%`}
                        styles={buildStyles({
                            textColor: 'white',
                            pathColor: 'blue',
                            trailColor: 'gray',
                        })}
                    />
                </div>
            </div>
        </Draggable>
    );
};

export default StepsTracker;
