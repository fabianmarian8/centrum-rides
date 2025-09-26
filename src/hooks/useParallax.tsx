import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = ({ speed = 0.5, disabled = false }: UseParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // Only apply parallax when element is in viewport
          if (elementTop < windowHeight && elementTop + elementHeight > 0) {
            const scrolled = window.pageYOffset;
            const elementCenter = elementTop + elementHeight / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;
            
            // Calculate parallax offset based on distance from viewport center
            const parallaxOffset = distanceFromCenter * speed;
            setOffset(parallaxOffset);
          }
        }
      });
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, disabled]);

  return { elementRef, offset };
};