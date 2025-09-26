import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';
import { ReactNode, CSSProperties } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Parallax = ({ 
  children, 
  speed = 0.5,
  direction = 'vertical',
  disabled = false,
  className,
  style = {}
}: ParallaxProps) => {
  const { elementRef, offset } = useParallax({ speed, disabled });

  const transform = disabled 
    ? 'none' 
    : direction === 'horizontal' 
      ? `translateX(${offset}px)` 
      : `translateY(${offset}px)`;

  return (
    <div
      ref={elementRef}
      className={cn('parallax-element', className)}
      style={{
        transform,
        ...style
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ParallaxContainer = ({ 
  children, 
  className,
  style = {}
}: ParallaxContainerProps) => {
  return (
    <div 
      className={cn('parallax-container', className)}
      style={style}
    >
      {children}
    </div>
  );
};