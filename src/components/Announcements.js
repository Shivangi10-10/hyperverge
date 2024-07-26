import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaBullhorn } from 'react-icons/fa';
import './Announcements.css'; // Import the CSS

const Announcements = ({ onClose }) => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/announcements');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setAnnouncements(data);
                } else {
                    console.error('Expected an array, but got:', data);
                    setAnnouncements([]);
                }
            } catch (error) {
                console.error('Error fetching announcements:', error);
                setAnnouncements([]);
            }
        };

        fetchAnnouncements();
    }, []);

    const fallbackAnnouncements = [
        {
            title: 'Welcome to Hyperverge Hackathon!',
            content: 'We are excited to have you here. Make sure to check the schedule and participate in various activities.',
        },
        {
            title: 'Workshop on APIs',
            content: 'Join us for a workshop on APIs at 3 PM today. Don\'t miss out on valuable insights.',
        },
        {
            title: 'Networking Event',
            content: 'There will be a networking event at 6 PM. Meet other participants and expand your network.',
        },
    ];

    const displayAnnouncements = announcements.length > 0 ? announcements : fallbackAnnouncements;

    return (
        <Draggable>
            <div className="announcements notion-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <FaBullhorn className="notion-icon" />
                <h2 className="notion-title">Announcements</h2>
                <ul className="announcements-list">
                    {displayAnnouncements.length > 0 ? (
                        displayAnnouncements.map((announcement, index) => (
                            <li key={index} className="announcement-item">
                                <h3 className="announcement-item-title">{announcement.title}</h3>
                                <p className="announcement-item-text">{announcement.content}</p>
                            </li>
                        ))
                    ) : (
                        <p className="announcement-no-items">No announcements available.</p>
                    )}
                </ul>
            </div>
        </Draggable>
    );
};

export default Announcements;
