import React from 'react';
import { cn } from '../../utils/cn';

export const ReviewFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { label: 'All', value: 'all' },
    { label: '5 ★', value: 5 },
    { label: '4 ★', value: 4 },
    { label: '3 ★', value: 3 },
    { label: '2 ★', value: 2 },
    { label: '1 ★', value: 1 },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      <span className="text-xs text-slate-400 font-medium shrink-0">Filter by:</span>
      {filters.map((f) => {
        const isSelected = activeFilter === f.value;
        return (
          <button
            key={f.label}
            onClick={() => onFilterChange(f.value)}
            className={cn(
              'px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors shrink-0 cursor-pointer',
              isSelected
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            )}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};

export default ReviewFilters;
