import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaLightbulb, FaPlus } from 'react-icons/fa';
import './Opportunity.css';

const Opportunity = ({ onClose }) => {
    const [opportunities, setOpportunities] = useState([]);

    const handleAddOpportunity = () => {
        const newOpportunity = prompt('Enter opportunity details:');
        if (newOpportunity) {
            setOpportunities([...opportunities, newOpportunity]);
        }
    };

    return (
        <Draggable>
            <div className="opportunity-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="opportunity-icon">
                    <FaLightbulb />
                </div>
                <h2 className="opportunity-title">Opportunity</h2>
                <div><br/><br/><br/></div>
                <button
                    onClick={handleAddOpportunity}
                    className="add-opportunity-button"
                >
                    <FaPlus /> Add
                </button>
                <ul className="opportunity-list">
                    {opportunities.length > 0 ? (
                        opportunities.map((opportunity, index) => (
                            <li key={index} className="opportunity-item">
                                {opportunity}
                            </li>
                        ))
                    ) : (
                        <p className="no-opportunities">No opportunities yet.</p>
                    )}
                </ul>
            </div>
        </Draggable>
    );
};

export default Opportunity;