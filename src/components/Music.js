import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaTimes } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import './Music.css'
import music from '../assets/music.mp3'

const Music = ({ onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMute = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isMuted) {
                audio.muted = false;
            } else {
                audio.muted = true;
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <Draggable>
            <div className="music-card">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <div className="music-icon">
                    <BsMusicNoteBeamed />
                </div>
                <h2 className="music-title">Music</h2>
                <div className="music-controls">
                    <button><FaStepBackward /></button>
                    <button className="play-button" onClick={togglePlay}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button><FaStepForward /></button>
                    <button className="mute-button" onClick={handleMute}>
                        {isMuted ? 'Unmute' : 'Mute'}
                    </button>
                </div>
                <a
                    href="https://music.youtube.com/watch?v=8BiLurrzFRw&si=ETHk1JzuHMsQLKlz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="music-link"
                >
                    Open YouTube Music
                </a>
                <audio
                    ref={audioRef}
                    src={music}
                    preload="auto"
                />
            </div>
        </Draggable>
    );
};

export default Music;
