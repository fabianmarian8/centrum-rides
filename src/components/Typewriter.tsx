'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseEnd?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  loop = false,
  pauseEnd = 2000,
  className,
  cursorClassName,
  showCursor = true
}: TypewriterProps) => {
  const { displayText, isTyping } = useTypewriter({ 
    text, 
    speed, 
    delay, 
    loop, 
    pauseEnd 
  });

  return (
    <span className={cn('inline-block', className)}>
      {displayText}
      {showCursor && (
        <span 
          className={cn(
            'inline-block w-0.5 bg-primary ml-1 animate-pulse',
            !isTyping && displayText.length === text.length && 'animate-pulse',
            cursorClassName
          )}
          style={{ 
            height: '1.2em',
            animation: 'blink-caret 1s step-end infinite'
          }}
        />
      )}
    </span>
  );
};