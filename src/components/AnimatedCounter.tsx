'use client';

import { useCounter } from '@/hooks/useCounter';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  startOnView?: boolean;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatNumber?: boolean;
}

export const AnimatedCounter = ({ 
  target, 
  duration = 2000, 
  startOnView = true, 
  suffix = '', 
  prefix = '',
  className,
  formatNumber = true
}: AnimatedCounterProps) => {
  const { count, elementRef } = useCounter({ target, duration, startOnView });

  const formatCount = (num: number) => {
    if (!formatNumber) return num.toString();
    return num.toLocaleString();
  };

  return (
    <span 
      ref={elementRef} 
      className={cn("font-bold tabular-nums", className)}
    >
      {prefix}{formatCount(count)}{suffix}
    </span>
  );
};