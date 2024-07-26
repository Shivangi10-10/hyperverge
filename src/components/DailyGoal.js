import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import { GiChecklist } from 'react-icons/gi';
import './DailyGoal.css';

const DailyGoal = ({ onClose }) => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('dgcItems')) || [];
        setItems(savedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('dgcItems', JSON.stringify(items));
    }, [items]);

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, { text: newItem, completed: false }]);
            setNewItem('');
        }
    };

    const handleToggleItem = (index) => {
        const updatedItems = items.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setItems(updatedItems);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <Draggable>
            <div className="dailygoal-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="dailygoal-icon">
                    <GiChecklist />
                </div>
                <h2 className="dailygoal-title">Daily Growth Checklist</h2>
                <div className="input-group">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Add new item"
                        className="dailygoal-input"
                    />
                    <button onClick={handleAddItem} className="dailygoal-button">
                        Add
                    </button>
                </div>
                <ul className="dailygoal-list">
                    {items.map((item, index) => (
                        <li key={index} className="dailygoal-item">
                            <div className="dailygoal-item-content">
                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => handleToggleItem(index)}
                                    className="dailygoal-checkbox"
                                />
                                <span className={`dailygoal-text ${item.completed ? 'completed' : ''}`}>
                                    {item.text}
                                </span>
                            </div>
                            <button onClick={() => handleRemoveItem(index)} className="dailygoal-remove-button">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                {items.length > 0 && (
                    <div className="dailygoal-progress">
                        <p>
                            Progress: {Math.round((items.filter((item) => item.completed).length / items.length) * 100)}%
                        </p>
                    </div>
                )}
            </div>
        </Draggable>
    );
};

export default DailyGoal;
