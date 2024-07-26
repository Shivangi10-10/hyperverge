import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import './TIL.css'; // Ensure to import the CSS

const TIL = ({ onClose }) => {
    const [tilEntries, setTilEntries] = useState([
        { id: 1, title: 'Introduction to React', summary: 'Explored the fundamentals of React, including components, props, and state.', domain: 'Technology' },
        { id: 2, title: 'Understanding Agile Methodology', summary: 'Gained insights into Agile practices and how they improve project management.', domain: 'Business' },
        { id: 3, title: 'Deep Dive into Node.js', summary: 'Studied Node.js event loop and how to build scalable network applications.', domain: 'Technology' },
        { id: 4, title: 'Effective Communication Skills', summary: 'Learned techniques for improving interpersonal communication in a professional setting.', domain: 'Business' },
        { id: 5, title: 'JavaScript ES6 Features', summary: 'Reviewed new features introduced in ES6, such as arrow functions and template literals.', domain: 'Technology' },
        { id: 6, title: 'Project Management Tools', summary: 'Explored various tools for managing projects and tasks efficiently.', domain: 'Business' },
        // Add more entries as needed
    ]);

    const [filter, setFilter] = useState('');
    const [showAll, setShowAll] = useState(false);

    const filteredEntries = tilEntries.filter(entry =>
        entry.domain.toLowerCase().includes(filter.toLowerCase())
    );

    const displayedEntries = showAll ? filteredEntries : filteredEntries.slice(0, 1); // Show only the first entry initially

    return (
        <Draggable>
            <div className="til-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <h2 className="til-title">TIL Corner</h2>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Filter by domain"
                    className="filter-input"
                />
                <ul className="til-entries-list">
                    {displayedEntries.length > 0 ? (
                        displayedEntries.map(entry => (
                            <li key={entry.id} className="til-entry-item">
                                <h3 className="til-entry-title">{entry.title}</h3>
                                <p className="til-entry-summary">{entry.summary}</p>
                                <span className="til-entry-domain">{entry.domain}</span>
                            </li>
                        ))
                    ) : (
                        <p className="no-entries">No entries found.</p>
                    )}
                </ul>
                {filteredEntries.length > 1 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="toggle-button"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </Draggable>
    );
};

export default TIL;
