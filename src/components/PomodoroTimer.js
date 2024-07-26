import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaClock } from 'react-icons/fa';
import './PomodoroTimer.css';

const PomodoroTimer = ({ onClose }) => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setIsActive(false);
                    if (isBreak) {
                        alert("Break session complete!");
                        setIsBreak(false);
                        setMinutes(25); // Reset to Pomodoro session
                    } else {
                        alert("Pomodoro session complete!");
                        setIsBreak(true);
                        setMinutes(5); // Start Short Break
                    }
                    setSeconds(0);
                }
            }, 1000);
        } else if (!isActive && (seconds !== 0 || minutes !== 0)) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isActive, seconds, minutes, isBreak]);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsBreak(false);
        setMinutes(25);
        setSeconds(0);
    };

    const startShortBreak = () => {
        setIsActive(true);
        setIsBreak(true);
        setMinutes(5);
        setSeconds(0);
    };

    const startLongBreak = () => {
        setIsActive(true);
        setIsBreak(true);
        setMinutes(10);
        setSeconds(0);
    };

    return (
        <Draggable>
            <div className="pomodoro-timer">
                <div className="handle"></div>
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <FaClock className="timer-icon" />
                <h2 className="title">
                    {isBreak ? 'Break Time' : 'Pomodoro Timer'}
                </h2>
                <div className="timer-display">
                    <p className="timer-text">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                    <button onClick={startTimer} className="start-button">
                        Start
                    </button>
                    <button onClick={resetTimer} className="reset-button">
                        Reset
                    </button>
                </div>
                <div className="controls">
                    <button onClick={startShortBreak} className="short-break-button">
                        Short Break
                    </button>
                    <button onClick={startLongBreak} className="long-break-button">
                        Long Break
                    </button>
                </div>
            </div>
        </Draggable>
    );
};

export default PomodoroTimer;
