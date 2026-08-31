import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Mic, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export const DashboardSearch = ({ onToast }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchSuggestions = [
    'Best cafés nearby',
    'First date places',
    'Cheap restaurants',
    'Things to do tonight',
    'Places for studying',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/explore');
  };

  const handleMicClick = () => {
    onToast?.('Voice search coming soon.');
  };

  const handleFilterClick = () => {
    onToast?.('Advanced search filters coming soon.');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          What are you looking for?
        </h2>
        <span className="text-xs text-indigo-600 font-medium flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> AI Natural Search
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-indigo-600">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Try 'quiet café under ₹500 near me'"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-36 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors shadow-inner"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button
              type="button"
              onClick={handleMicClick}
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="Voice search placeholder"
              title="Voice search"
            >
              <Mic className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleFilterClick}
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="Filters"
              title="Filter options"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="rounded-xl px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700"
            >
              Search
            </Button>
          </div>
        </div>
      </form>

      {/* Query Suggestion Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-xs text-slate-400 font-medium">Try asking LocAI:</span>
        {searchSuggestions.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => setSearchQuery(prompt)}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200/80 transition-colors cursor-pointer"
          >
            "{prompt}"
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardSearch;
