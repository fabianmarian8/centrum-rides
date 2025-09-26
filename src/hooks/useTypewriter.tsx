import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseEnd?: number;
}

export const useTypewriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  loop = false,
  pauseEnd = 2000
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayText('');
    };

    const timeoutId = setTimeout(startTyping, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, text]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Finished typing
      setIsTyping(false);
      
      if (loop) {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
          setIsTyping(true);
        }, pauseEnd);
      }
    }
  }, [currentIndex, text, speed, isTyping, loop, pauseEnd]);

  return { 
    displayText, 
    isTyping: currentIndex < text.length,
    showCursor
  };
};