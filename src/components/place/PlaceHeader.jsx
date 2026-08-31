import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import Badge from '../ui/Badge';

export const PlaceHeader = ({ place }) => {
  if (!place) return null;

  return (
    <div className="space-y-2 border-b border-slate-200/80 pb-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="indigo" size="sm">{place.category}</Badge>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          <Clock className="w-3 h-3 text-emerald-500" />
          {place.openStatus}
        </span>
        <span className="text-xs text-slate-500 font-semibold">{place.priceRange}</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        {place.name}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
        <div className="flex items-center gap-1 font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{place.rating}</span>
          <span className="text-[11px] text-amber-700 font-normal">({place.reviewCount} reviews)</span>
        </div>

        <span className="flex items-center gap-1 font-medium text-slate-600">
          <MapPin className="w-3.5 h-3.5 text-indigo-600" />
          {place.location} • <span className="font-semibold text-slate-800">{place.distance} km away</span>
        </span>
      </div>
    </div>
  );
};

export default PlaceHeader;
