import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaVideo, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import './GoogleMeet.css';

const GoogleMeet = () => {
    const [meetings, setMeetings] = useState([]);
    const [currentMeetingIndex, setCurrentMeetingIndex] = useState(0);

    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const response = await fetch('http://localhost:4000/calendar/events');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setMeetings(data);
                } else {
                    console.error('Expected an array, but got:', data);
                    setMeetings([]);
                }
            } catch (error) {
                console.error('Error fetching meetings:', error);
                setMeetings([]);
            }
        };

        fetchMeetings();
    }, []);

    const currentMeeting = meetings[currentMeetingIndex];

    const nextMeeting = () => {
        setCurrentMeetingIndex((prevIndex) => 
            prevIndex + 1 >= meetings.length ? 0 : prevIndex + 1
        );
    };

    const prevMeeting = () => {
        setCurrentMeetingIndex((prevIndex) => 
            prevIndex - 1 < 0 ? meetings.length - 1 : prevIndex - 1
        );
    };

    const createNewMeet = () => {
        window.open('https://meet.google.com/new', '_blank');
    };

    return (
        <Draggable>
            <div className="google-meet-card">
                <div className="meet-icon">
                    <FaVideo />
                </div>
                {meetings.length > 0 ? (
                    <>
                        <h3 className="meeting-summary">{currentMeeting.summary}</h3>
                        <p className="meeting-time">
                            {new Date(currentMeeting.start.dateTime || currentMeeting.start.date).toLocaleString()}
                        </p>
                        {currentMeeting.hangoutLink && (
                            <a href={currentMeeting.hangoutLink} target="_blank" rel="noopener noreferrer" className="join-button">
                                Join Meeting
                            </a>
                        )}
                        <div className="meet-controls">
                            <button onClick={prevMeeting}><FaChevronLeft /></button>
                            <button><FaCalendarAlt /></button>
                            <button onClick={nextMeeting}><FaChevronRight /></button>
                        </div>
                    </>
                ) : (
                    <p className="no-meetings">No meetings scheduled.</p>
                )}
                <button onClick={createNewMeet} className="create-meet-button">
                    <FaPlus /> Create New Meet
                </button>
            </div>
        </Draggable>
    );
};

export default GoogleMeet;