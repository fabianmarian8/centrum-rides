import { useEffect, useState, useRef, useCallback } from 'react';

interface UseCounterOptions {
  target: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounter = ({ target, duration = 2000, startOnView = true }: UseCounterOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const startCounter = useCallback(() => {
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
  }, [hasStarted, target, duration]);

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
  }, [hasStarted, startOnView, startCounter]);

  return { count, elementRef };
};