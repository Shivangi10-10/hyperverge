import React from 'react';
import Draggable from 'react-draggable';
import { FaCalendarAlt } from 'react-icons/fa';
import './GoogleCalendar.css';

const GoogleCalendar = () => {
    const calendarUrl = 'https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata';

    return (
        <Draggable>
            <div className="google-calendar-card">
                <div className="calendar-icon">
                    <FaCalendarAlt />
                </div>
                <h2 className="calendar-title">Google Calendar</h2>
                <iframe
                    src={calendarUrl}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    className="calendar-iframe"
                    title="Google Calendar"
                ></iframe>
            </div>
        </Draggable>
    );
};

export default GoogleCalendar;