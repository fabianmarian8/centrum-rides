import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

export const FadeIn = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  className
}: FadeInProps) => {
  const { isVisible, elementRef } = useScrollAnimation({ 
    threshold, 
    rootMargin, 
    triggerOnce 
  });

  const getDirectionClass = () => {
    switch (direction) {
      case 'left': return 'fade-in-left';
      case 'right': return 'fade-in-right';
      case 'down': return 'fade-in';
      default: return 'fade-in-up';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        getDirectionClass(),
        isVisible && 'visible',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};