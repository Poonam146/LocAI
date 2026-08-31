import React from 'react';
import { cn } from '../../utils/cn';

const variants = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  warning: 'bg-amber-50 text-amber-700 border-amber-200/60',
  error: 'bg-rose-50 text-rose-700 border-rose-200/60',
  info: 'bg-sky-50 text-sky-700 border-sky-200/60',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs font-medium',
  md: 'px-2.5 py-1 text-xs font-semibold',
  lg: 'px-3 py-1.5 text-sm font-semibold',
};

export const Badge = ({
  children,
  variant = 'indigo',
  size = 'md',
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border tracking-wide transition-colors',
        variants[variant] || variants.indigo,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
