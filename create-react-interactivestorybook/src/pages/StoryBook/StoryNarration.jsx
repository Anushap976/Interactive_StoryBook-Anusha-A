import { useState, useRef } from 'react';
import Button from '../../components/Button';

const StoryNarration = ({ text }) => {
    // Track if narration is active
    const [isNarrating, setIsNarrating] = useState(false);
    // Track if narration is paused
    const [isPaused, setIsPaused] = useState(false);
    // Store SpeechSynthesisUtterance instance to control narration
    const speechRef = useRef(null);

    // Start narration
    const start = () => {
        stop(); // Stop any ongoing narration before starting new
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.onstart = () => setIsNarrating(true);
        utterance.onend = () => setIsNarrating(false);
        utterance.onerror = () => setIsNarrating(false);
        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    // Pause narration if speaking
    const pause = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Resume narration if paused
    const resume = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    };

    // Stop narration and reset state
    const stop = () => {
        window.speechSynthesis.cancel();
        setIsNarrating(false);
        setIsPaused(false);
    };

    return (
        <div className="narration-buttons">
            {/* Narration control buttons with enabled/disabled states */}
            <Button text="🔊" onClick={start} disabled={isNarrating && !isPaused} />
            <Button text="⏸" onClick={pause} disabled={!isNarrating || isPaused} />
            <Button text="▶️" onClick={resume} disabled={!isPaused} />
            <Button text="⏹" onClick={stop} disabled={!isNarrating} />
        </div>
    );
};

export default StoryNarration;
