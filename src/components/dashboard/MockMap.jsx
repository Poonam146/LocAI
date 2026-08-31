import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Plus, Minus, Navigation, Star, ArrowRight, X } from 'lucide-react';
import { MAP_PINS } from '../../data/dashboard';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

export const MockMap = ({ selectedLocation, onToast }) => {
  const [selectedPin, setSelectedPin] = useState(MAP_PINS[0]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const navigate = useNavigate();

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.15, 1.45));
    onToast?.('Zoomed in (Mock map)');
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));
    onToast?.('Zoomed out (Mock map)');
  };

  const handleRecenter = () => {
    setZoomLevel(1);
    const userPin = MAP_PINS.find((p) => p.isCurrent) || MAP_PINS[0];
    setSelectedPin(userPin);
    onToast?.('Recentered on your location');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg relative flex flex-col justify-between h-[420px] sm:h-[480px]">
      {/* Top Header Overlay */}
      <div className="relative z-20 flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-4 py-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-200">
            Interactive Radar • {selectedLocation}
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 border border-indigo-800/80 px-2 py-0.5 rounded-md">
          Scale {(zoomLevel * 100).toFixed(0)}%
        </span>
      </div>

      {/* Map Viewport Grid */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0f172a] select-none">
        {/* Transform Scale Container for Zoom */}
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* SVG Road Network & Water Body Graphic */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            {/* Water Body */}
            <path d="M 0 300 Q 150 220 300 350 T 600 280 L 600 450 L 0 450 Z" fill="#38bdf8" />

            {/* Park Area */}
            <path d="M 50 50 Q 120 20 220 80 T 350 50 L 300 180 Q 150 200 50 120 Z" fill="#34d399" />

            {/* Grid Arterial Roads */}
            <line x1="0" y1="120" x2="600" y2="120" stroke="#94a3b8" strokeWidth="6" strokeDasharray="12 6" />
            <line x1="0" y1="280" x2="600" y2="280" stroke="#94a3b8" strokeWidth="8" />
            <line x1="200" y1="0" x2="200" y2="450" stroke="#94a3b8" strokeWidth="6" />
            <line x1="420" y1="0" x2="420" y2="450" stroke="#94a3b8" strokeWidth="8" strokeDasharray="16 8" />

            {/* Secondary Diagonal Roads */}
            <line x1="50" y1="400" x2="500" y2="50" stroke="#64748b" strokeWidth="4" />
          </svg>

          {/* Interactive Location Pins */}
          {MAP_PINS.map((pin) => {
            const isSelected = selectedPin?.id === pin.id;
            if (pin.isCurrent) {
              return (
                <div
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/40 animate-ping absolute" />
                    <div className="w-7 h-7 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Navigation className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                className={cn(
                  'absolute -translate-x-1/2 -translate-y-full cursor-pointer z-20 transition-all duration-200 group',
                  isSelected && 'z-30 scale-125'
                )}
              >
                <div
                  className={cn(
                    'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border transition-all',
                    isSelected
                      ? 'bg-indigo-600 text-white border-white ring-4 ring-indigo-500/30'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:bg-slate-800'
                  )}
                >
                  <MapPin className={cn('w-3.5 h-3.5', isSelected ? 'text-white' : 'text-indigo-400')} />
                  <span className="text-[11px] truncate max-w-[100px]">{pin.name}</span>
                  {pin.rating && (
                    <span className="text-[10px] text-amber-400">★ {pin.rating}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pin Details Popup Overlay */}
        {selectedPin && (
          <div className="absolute bottom-4 left-4 right-16 z-30 animate-in slide-in-from-bottom-3 duration-200">
            <div className="bg-slate-950/95 border border-slate-800 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 text-white">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white truncate">{selectedPin.name}</span>
                  {selectedPin.rating && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-1.5 py-0.5 rounded">
                      ★ {selectedPin.rating}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {selectedPin.category} • {selectedPin.distance} • {selectedPin.openStatus}
                </p>
                {selectedPin.aiTag && (
                  <span className="text-[10px] text-indigo-300 font-medium block mt-1">
                    ✨ {selectedPin.aiTag}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/places')}
                  rightIcon={ArrowRight}
                  className="text-xs py-1.5 px-3 bg-indigo-600 hover:bg-indigo-500"
                >
                  View place
                </Button>
                <button
                  onClick={() => setSelectedPin(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close pin card"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right Map Controls Group */}
        <div className="absolute right-4 bottom-4 z-30 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white flex items-center justify-center shadow-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Zoom in map"
            title="Zoom in"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white flex items-center justify-center shadow-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Zoom out map"
            title="Zoom out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={handleRecenter}
            className="w-9 h-9 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 flex items-center justify-center shadow-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Recenter on current location"
            title="Recenter location"
          >
            <Navigation className="w-4 h-4 fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockMap;
