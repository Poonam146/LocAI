import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Check, Navigation } from 'lucide-react';
import { LOCATIONS } from '../../data/dashboard';
import { cn } from '../../utils/cn';

export const LocationSelector = ({ selectedLocation, onLocationChange, onToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (loc) => {
    onLocationChange(loc);
    setIsOpen(false);
    onToast(`Location updated to ${loc}`);
  };

  const handleUseMyLocation = () => {
    setIsOpen(false);
    onToast('Location access coming soon.');
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-xs hover:border-indigo-300 hover:bg-slate-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        aria-label="Select city location"
      >
        <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
        <span className="truncate max-w-[140px] sm:max-w-[180px]">{selectedLocation}</span>
        <ChevronDown className={cn('w-3.5 h-3.5 text-slate-400 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200/90 shadow-xl z-50 p-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Select Discovery Location
          </div>
          <div className="space-y-0.5">
            {LOCATIONS.map((loc) => {
              const active = loc === selectedLocation;
              return (
                <button
                  key={loc}
                  onClick={() => handleSelect(loc)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left cursor-pointer',
                    active
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  <span className="truncate">{loc}</span>
                  {active && <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="mt-1 pt-1.5 border-t border-slate-100">
            <button
              onClick={handleUseMyLocation}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors text-left cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-indigo-600" />
              <span>Use my location</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
