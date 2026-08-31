import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Heart, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export const PlaceCard = ({ place, className }) => {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  if (!place) return null;

  const toggleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const handleNavigate = () => {
    navigate(`/places/${place.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className={cn(
        'group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover-card-rise cursor-pointer flex flex-col justify-between transition-all duration-200',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant="neutral" className="bg-white/90 backdrop-blur-xs text-slate-800 font-semibold shadow-xs">
            {place.category}
          </Badge>
          <button
            onClick={toggleSave}
            className={cn(
              'p-2 rounded-full backdrop-blur-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
              isSaved
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
            )}
            aria-label={isSaved ? 'Remove from saved' : 'Save place'}
          >
            <Heart className={cn('w-4 h-4', isSaved && 'fill-white')} />
          </button>
        </div>

        {/* Bottom Distance & Open Status Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3 text-indigo-300" />
            {place.location} • {place.distance} km
          </span>
          <span className="font-semibold px-2 py-0.5 rounded-md bg-emerald-500/90 backdrop-blur-xs text-white">
            {place.openStatus}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {place.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md text-xs font-semibold border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{place.rating}</span>
              <span className="text-[10px] text-amber-700">({place.reviewCount})</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {place.description}
          </p>
        </div>

        {/* AI Tag & Footer Action */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          {place.aiTag ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-lg">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              <span className="truncate max-w-[150px]">{place.aiTag}</span>
            </span>
          ) : (
            <span className="text-xs text-slate-400">{place.priceRange}</span>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-indigo-600 font-semibold hover:bg-indigo-50 group-hover:translate-x-0.5 transition-transform"
            rightIcon={ArrowRight}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
