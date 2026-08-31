import React from 'react';
import { RotateCcw, Filter, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

export const FilterSidebar = ({
  filters,
  setFilters,
  onApply,
  onClear,
  className,
}) => {
  const categories = [
    'Restaurant',
    'Café',
    'Hotel',
    'Park',
    'Tourist Place',
    'Shopping',
    'Hospital',
    'Temple',
    'Petrol Pump',
    'ATM',
  ];

  const ratingOptions = [
    { label: '4.5+', value: 4.5 },
    { label: '4.0+', value: 4.0 },
    { label: '3.5+', value: 3.5 },
  ];

  const priceOptions = ['₹', '₹₹', '₹₹₹', '₹₹₹₹'];

  const distanceOptions = [
    { label: '< 1 km', value: 1.0 },
    { label: '< 3 km', value: 3.0 },
    { label: '< 5 km', value: 5.0 },
    { label: '< 10 km', value: 10.0 },
  ];

  const aiTags = [
    'Great for studying',
    'Perfect for dates',
    'Family friendly',
    'Budget friendly',
    'Great ambience',
  ];

  const handleCategoryToggle = (cat) => {
    const current = filters.categories || [];
    const updated = current.includes(cat)
      ? current.filter((c) => c !== cat)
      : [...current, cat];
    setFilters({ ...filters, categories: updated });
  };

  const handlePriceToggle = (price) => {
    const current = filters.prices || [];
    const updated = current.includes(price)
      ? current.filter((p) => p !== price)
      : [...current, price];
    setFilters({ ...filters, prices: updated });
  };

  const handleAiTagToggle = (tag) => {
    const current = filters.aiTags || [];
    const updated = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag];
    setFilters({ ...filters, aiTags: updated });
  };

  return (
    <div className={cn('bg-white border border-slate-200/80 rounded-2xl p-5 space-y-6 shadow-xs', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Filter className="w-4 h-4 text-indigo-600" />
          Filter Places
        </h3>
        <button
          onClick={onClear}
          className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Clear All
        </button>
      </div>

      {/* 1. Categories Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Category</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {categories.map((cat) => {
            const isChecked = (filters.categories || []).includes(cat);
            return (
              <label key={cat} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium cursor-pointer hover:text-slate-900 select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCategoryToggle(cat)}
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
                />
                <span>{cat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Rating Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Minimum Rating</h4>
        <div className="flex gap-2">
          {ratingOptions.map((opt) => {
            const isSelected = filters.minRating === opt.value;
            return (
              <button
                key={opt.label}
                onClick={() => setFilters({ ...filters, minRating: isSelected ? null : opt.value })}
                className={cn(
                  'flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer',
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                )}
              >
                ★ {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Price Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Price Range</h4>
        <div className="flex gap-2">
          {priceOptions.map((p) => {
            const isSelected = (filters.prices || []).includes(p);
            return (
              <button
                key={p}
                onClick={() => handlePriceToggle(p)}
                className={cn(
                  'flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer',
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                )}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Distance Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Distance Radius</h4>
        <div className="grid grid-cols-2 gap-2">
          {distanceOptions.map((dist) => {
            const isSelected = filters.maxDistance === dist.value;
            return (
              <button
                key={dist.label}
                onClick={() => setFilters({ ...filters, maxDistance: isSelected ? null : dist.value })}
                className={cn(
                  'py-1.5 px-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer text-center',
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                )}
              >
                {dist.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Open Now Filter */}
      <div className="pt-1">
        <label className="flex items-center gap-2 text-xs text-slate-800 font-semibold cursor-pointer select-none">
          <input
            type="checkbox"
            checked={!!filters.openOnly}
            onChange={(e) => setFilters({ ...filters, openOnly: e.target.checked })}
            className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
          />
          <span>Open Now Only</span>
        </label>
      </div>

      {/* 6. AI Tags Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">AI Experience Tags</h4>
        <div className="space-y-1.5">
          {aiTags.map((tag) => {
            const isChecked = (filters.aiTags || []).includes(tag);
            return (
              <label key={tag} className="flex items-center gap-2 text-xs text-slate-700 font-medium cursor-pointer hover:text-slate-900 select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleAiTagToggle(tag)}
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
                />
                <span>✨ {tag}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Apply Button */}
      <Button
        variant="primary"
        size="md"
        onClick={onApply}
        className="w-full font-bold bg-indigo-600 hover:bg-indigo-700"
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
