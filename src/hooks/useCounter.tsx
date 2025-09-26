import { useEffect, useState, useRef } from 'react';

interface UseCounterOptions {
  target: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounter = ({ target, duration = 2000, startOnView = true }: UseCounterOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!startOnView) {
      startCounter();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          startCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  const startCounter = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    
    updateCounter();
  };

  return { count, elementRef };
};