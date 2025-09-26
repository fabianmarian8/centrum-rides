import { useEffect } from 'react';

const useVisualEffects = (dependencies: unknown[] = []) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>('.fade-in');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('visible');
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const counters = Array.from(document.querySelectorAll<HTMLElement>('.counter'));

    const handleCounter = (entry: IntersectionObserverEntry, element: HTMLElement) => {
      const targetValue = Number(element.dataset.target ?? 0);
      const duration = Number(element.dataset.duration ?? 2000);
      const decimals = Number(element.dataset.decimals ?? 0);
      const suffix = element.dataset.suffix ?? '';
      const prefix = element.dataset.prefix ?? '';
      let start = 0;
      const increment = targetValue / (duration / 16);

      const updateCounter = () => {
        start += increment;
        if (start < targetValue) {
          element.textContent = `${prefix}${start.toFixed(decimals)}${suffix}`;
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = `${prefix}${targetValue.toFixed(decimals)}${suffix}`;
        }
      };

      updateCounter();
    };

    const counterObserver = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            handleCounter(entry, element);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });

    return () => {
      counterObserver.disconnect();
    };
  }, dependencies);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const typewriterElements = Array.from(document.querySelectorAll<HTMLElement>('.typewriter'));
    const timers: number[] = [];

    typewriterElements.forEach((element) => {
      const text = element.dataset.text ?? element.textContent ?? '';
      element.textContent = '';
      let index = 0;

      const type = () => {
        if (index < text.length) {
          element.textContent = `${element.textContent ?? ''}${text.charAt(index)}`;
          index += 1;
          const timeout = window.setTimeout(type, 90);
          timers.push(timeout);
        }
      };

      type();
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, dependencies);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('.parallax-element'));

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.speed ?? 0.5);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const magneticButtons = Array.from(document.querySelectorAll<HTMLElement>('.magnetic-button'));

    const handleMouseMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const resetTransform = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = 'translate(0, 0)';
    };

    magneticButtons.forEach((button) => {
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', resetTransform);
    });

    return () => {
      magneticButtons.forEach((button) => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', resetTransform);
      });
    };
  }, []);
};

export default useVisualEffects;
