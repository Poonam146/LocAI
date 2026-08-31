import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Toast = ({
  message,
  type = 'info', // 'success' | 'error' | 'info'
  isVisible,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isVisible && duration) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible || !message) return null;

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  };

  const styles = {
    success: 'bg-emerald-900 text-emerald-50 border-emerald-700',
    error: 'bg-rose-900 text-rose-50 border-rose-700',
    info: 'bg-slate-900 text-slate-50 border-slate-700',
  };

  const Icon = icons[type] || Info;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl text-xs font-semibold max-w-md',
          styles[type]
        )}
      >
        <Icon className="w-4 h-4 shrink-0" />
        <span className="flex-1">{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
