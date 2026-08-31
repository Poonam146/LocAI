import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const CategoryCard = ({
  icon: Icon,
  label,
  count,
  description,
  path = '/explore',
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'group flex flex-col items-center justify-center p-5 bg-white border border-slate-200/80 rounded-2xl text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer w-full',
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
        {Icon ? <Icon className="w-6 h-6 shrink-0" /> : <span className="text-xl">📍</span>}
      </div>
      <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
        {label}
      </h3>
      {count && (
        <span className="text-xs text-slate-500 font-medium mt-1">
          {count}
        </span>
      )}
      {description && (
        <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
          {description}
        </span>
      )}
    </button>
  );
};

export default CategoryCard;
