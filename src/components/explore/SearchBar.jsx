import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Sparkles, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export const SearchBar = ({ searchQuery, setSearchQuery, onSearchSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const suggestions = [
    { label: 'Cafés nearby', icon: '☕' },
    { label: 'Affordable restaurants', icon: '🍴' },
    { label: 'Places to study', icon: '📚' },
    { label: 'Date night places', icon: '❤️' },
    { label: 'Parks near me', icon: '🌳' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (text) => {
    setSearchQuery(text);
    setIsFocused(false);
    onSearchSubmit?.(text);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearchSubmit?.('');
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={containerRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsFocused(false);
          onSearchSubmit?.(searchQuery);
        }}
        className="relative flex items-center"
      >
        <div className="absolute left-4 text-indigo-600">
          <Search className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search places, categories, or try asking LocAI..."
          className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-28 py-3.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-xs"
        />

        <div className="absolute right-2 flex items-center gap-1.5">
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="rounded-xl px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Auto-Suggestion Dropdown Area when focused */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200/90 rounded-2xl shadow-xl z-50 p-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between px-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            <span>Try searching for</span>
            <span className="flex items-center gap-1 text-indigo-600">
              <Sparkles className="w-3 h-3" /> Quick suggestions
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {suggestions.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSuggestionClick(item.label)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200/80 transition-colors cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
