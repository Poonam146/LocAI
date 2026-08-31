import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({ children, className, hoverEffect = false, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white border border-slate-200/80 rounded-xl shadow-xs overflow-hidden',
        hoverEffect && 'hover-card-rise cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-5 pb-3', className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-lg font-semibold text-slate-900 tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className, ...props }) => {
  return (
    <p className={cn('text-sm text-slate-500 mt-1', className)} {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-5 pt-3', className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-5 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50', className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
