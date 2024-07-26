    import React, { useState } from 'react';
    import axios from 'axios';
    import Draggable from 'react-draggable';
    import { FaTimes } from 'react-icons/fa';
    import { SiOpenai } from 'react-icons/si'; // OpenAI icon
    import './ChatGPTWidget.css';

    const ChatGPTWidget = ({ onClose }) => {
        const [input, setInput] = useState('');
        const [response, setResponse] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!input.trim()) {
                setResponse('Please enter a prompt.');
                return;
            }

            try {
                const result = await axios.post(
                    'https://api.openai.com/v1/chat/completions',
                    {
                        model: "gpt-3.5-turbo", // Change model as needed
                        messages: [{ role: 'user', content: input }],
                        max_tokens: 150,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer <your_key>`, 
                            'Content-Type': 'application/json',
                        },
                    }
                );

                setResponse(result.data.choices[0].message.content);
            } catch (error) {
                console.error('Error fetching response from ChatGPT:', error);
                setResponse('Sorry, something went wrong.');
            }
        };

        return (
            <Draggable>
                <div className="chatgpt-card">
                    <button onClick={onClose} className="close-button">
                        <FaTimes />
                    </button>
                    <div className="chatgpt-icon">
                        <SiOpenai size={60} /> {/* OpenAI icon with specified size */}
                    </div>
                    <h2 className="chatgpt-title">ChatGPT</h2>
                    <form onSubmit={handleSubmit} className="chatgpt-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="chatgpt-input"
                            placeholder="Ask me anything..."
                        />
                        <button type="submit" className="chatgpt-button">
                            Submit
                        </button>
                    </form>
                    <div className="chatgpt-response">
                        {response ? (
                            <p>{response}</p>
                        ) : (
                            <p className="text-gray-500">Your response will appear here...</p>
                        )}
                    </div>
                </div>
            </Draggable>
        );
    };

    export default ChatGPTWidget;
