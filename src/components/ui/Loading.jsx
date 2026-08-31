import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Spinner = ({ size = 'md', className }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  return (
    <Loader2
      className={cn('animate-spin text-indigo-600', sizes[size] || sizes.md, className)}
    />
  );
};

export const CardSkeleton = ({ className }) => {
  return (
    <div className={cn('bg-white border border-slate-200 rounded-xl p-5 space-y-4 animate-pulse', className)}>
      <div className="w-2/3 h-5 bg-slate-200 rounded-md" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-slate-100 rounded-md" />
        <div className="w-4/5 h-4 bg-slate-100 rounded-md" />
      </div>
      <div className="pt-2 flex justify-between">
        <div className="w-20 h-7 bg-slate-200 rounded-full" />
        <div className="w-24 h-7 bg-slate-200 rounded-lg" />
      </div>
    </div>
  );
};

export const Loading = ({ label = 'Loading guide data...', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-50/80 backdrop-blur-xs flex flex-col items-center justify-center z-50 gap-3">
        <Spinner size="lg" />
        <p className="text-sm font-medium text-slate-600 animate-pulse">{label}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-3">
      <Spinner size="md" />
      {label && <p className="text-xs font-medium text-slate-500">{label}</p>}
    </div>
  );
};

export default Loading;
