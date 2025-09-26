import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
  disabled?: boolean;
  className?: string;
}

export const MagneticButton = ({ 
  children, 
  strength = 0.3,
  disabled = false,
  className,
  ...props
}: MagneticButtonProps) => {
  const { elementRef } = useMagnetic({ strength, disabled });

  return (
    <button
      ref={elementRef}
      className={cn('magnetic-button', className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};