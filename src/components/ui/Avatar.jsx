import React from 'react';
import { cn } from '../../utils/cn';

const sizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
};

export const Avatar = ({
  src,
  alt = 'User avatar',
  name = 'User',
  size = 'md',
  status,
  className,
}) => {
  const getInitials = (n) => {
    if (!n) return 'U';
    return n
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block shrink-0">
      <div
        className={cn(
          'relative rounded-full overflow-hidden flex items-center justify-center font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xs select-none',
          sizes[size] || sizes.md,
          className
        )}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white',
            size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5',
            status === 'online' && 'bg-emerald-500',
            status === 'away' && 'bg-amber-500',
            status === 'offline' && 'bg-slate-400'
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
