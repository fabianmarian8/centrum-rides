import { useState, useEffect } from 'react';

interface UseSmoothRevealOptions {
  threshold?: number;
  hideOnScrollDown?: boolean;
}

export const useSmoothReveal = ({ 
  threshold = 80, 
  hideOnScrollDown = true 
}: UseSmoothRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (!hideOnScrollDown) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY, threshold, hideOnScrollDown]);

  return { isVisible };
};