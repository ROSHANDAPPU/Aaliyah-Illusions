import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBrandTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedBrandText({ text, className, style }: AnimatedBrandTextProps) {
  return (
    <span
      className={cn(
        "animated-brand-text",
        className
      )}
      style={{
        fontFamily: '"Geometric Sans", sans-serif',
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'transparent',
        backgroundImage: 'linear-gradient(135deg, #bfbfbf 0%, #e5e5e5 30%, #a3a3a3 60%, #d9d9d9 100%)',
        backgroundSize: '300% 300%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        // animation: 'sheen 4s ease-in-out infinite',
        ...style,
      }}
    >
      {text}
    </span>
  );
}