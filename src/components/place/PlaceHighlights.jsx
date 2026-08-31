import React from 'react';
import {
  Coffee,
  Wifi,
  Zap,
  Wind,
  Armchair,
  Dog,
  Car,
  Music,
  CheckCircle2
} from 'lucide-react';

export const PlaceHighlights = ({ highlights = [] }) => {
  if (!highlights || highlights.length === 0) return null;

  const iconMap = {
    'Specialty Coffee': Coffee,
    'Free Wi-Fi': Wifi,
    'Power Outlets': Zap,
    'Air Conditioned': Wind,
    'Garden Seating': Armchair,
    'Comfortable Seating': Armchair,
    'Pet Friendly': Dog,
    'Valet Parking': Car,
    'Parking': Car,
    'Live Music': Music,
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-slate-900 tracking-tight">
        Place Highlights & Amenities
      </h3>

      <div className="flex flex-wrap gap-2">
        {highlights.map((item) => {
          const Icon = iconMap[item] || CheckCircle2;
          return (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              <Icon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceHighlights;
