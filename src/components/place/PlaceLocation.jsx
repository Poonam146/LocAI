import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export const PlaceLocation = ({ place, onToast }) => {
  if (!place) return null;

  const handleDirections = () => {
    onToast?.('Real directions will be available after Maps integration.');
  };

  return (
    <div className="space-y-4 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-indigo-600" />
          Location & Access
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          {place.distance} km from your location
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-800">
          📍 {place.location}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">
          {place.address || `${place.name}, ${place.location}`}
        </p>
      </div>

      {/* HTML/CSS Mock Location Map Widget */}
      <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
        {/* SVG Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="60" x2="600" y2="60" stroke="#94a3b8" strokeWidth="6" />
          <line x1="0" y1="120" x2="600" y2="120" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 4" />
          <line x1="150" y1="0" x2="150" y2="300" stroke="#94a3b8" strokeWidth="6" />
          <line x1="300" y1="0" x2="300" y2="300" stroke="#94a3b8" strokeWidth="8" />
        </svg>

        {/* Center Pin for Place */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white shadow-lg animate-bounce duration-1000">
            <MapPin className="w-4 h-4 fill-white/20" />
          </div>
          <span className="mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-950/90 text-white border border-slate-700 shadow-md">
            {place.name}
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={handleDirections}
        leftIcon={Navigation}
        className="w-full text-xs font-semibold text-slate-700 border-slate-300 hover:bg-slate-50"
      >
        Get Directions
      </Button>
    </div>
  );
};

export default PlaceLocation;
