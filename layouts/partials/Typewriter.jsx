"use client";

import { useState, useEffect } from 'react';

export default function TypewriterEffect({ words, typeSpeed = 50, deleteSpeed = 30, delayBetweenWords = 1000, backgroundColor = 'bg-theme-light', style = 'text-primary', header, height = 'h-40' }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); 
  const [displayedText, setDisplayedText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [typingDelay, setTypingDelay] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingDelay(typeSpeed);
        } else {
          setTypingDelay(deleteSpeed);
        }
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedText === currentWord) {
          setIsDeleting(true);
          setTypingDelay(delayBetweenWords);
        } else {
          setTypingDelay(typeSpeed);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <div className={`w-full ${backgroundColor} ${height}  flex items-center justify-center text-white p-3 my-6 mt-10`}>
      <div className="text-center">
        {header && <h3 className="text-2xl font-bold mb-3">{header}</h3>}
        <p className="text-lg">
          <span className={`${style}`}>
            {displayedText} <span className='-ml-1 text-black animate-blink'>|</span> 
          </span>
        </p>
      </div>
    </div>
  );
};
