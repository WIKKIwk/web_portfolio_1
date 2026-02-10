import { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    onComplete?: () => void;
    startTyping?: boolean;
}

export function TypewriterText({
    text,
    delay = 0,
    speed = 30,
    className = '',
    onComplete,
    startTyping = false
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!startTyping || hasStarted) return;

        setHasStarted(true);
        const delayTimeout = setTimeout(() => {
            setCurrentIndex(0);
            setDisplayedText('');
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [startTyping, delay, hasStarted]);

    useEffect(() => {
        if (!hasStarted || currentIndex >= text.length) {
            if (currentIndex >= text.length && onComplete) {
                onComplete();
            }
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, hasStarted, onComplete]);

    return (
        <span className={className}>
            {displayedText.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block animate-fadeIn"
                    style={{
                        animationDelay: `${index * 0.02}s`,
                        animationFillMode: 'backwards'
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
}
