import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import './BookQuote.css';

const BookQuote = ({ onClose }) => {
    const [book, setBook] = useState(null);
    const [quote, setQuote] = useState(null);

    const bookData = {
        title: "1984",
        author: "George Orwell",
        url: "https://archive.org/details/1984_201907/page/n1/mode/2up?view=theater"
    };

    const quoteData = "War is peace. Freedom is slavery. Ignorance is strength.";

    useEffect(() => {
        setBook(bookData);
        setQuote(quoteData);
    }, []);

    if (!book || !quote) return <p>Loading...</p>;

    return (
        <Draggable>
            <div className="bookquote-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="bookquote-icon">
                    <MdOutlineLibraryBooks />
                </div>
                <h2 className="bookquote-title">Book of the Day</h2>
                <div className="bookquote-content">
                    <h3 className="bookquote-book-title">{book.title}</h3>
                    <p className="bookquote-book-author">by {book.author}</p>
                   
                </div>
                <h2 className="bookquote-title">Quote of the Day</h2>
                <blockquote className="bookquote-quote">"{quote}"</blockquote>
                <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bookquote-link"
                    >
                        Read the book
                    </a>
            </div>
        </Draggable>
    );
};

export default BookQuote;
