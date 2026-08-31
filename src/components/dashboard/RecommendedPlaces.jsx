import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import PlaceCard from '../common/PlaceCard';
import Button from '../ui/Button';
import { PLACES } from '../../data/places';

export const RecommendedPlaces = () => {
  const navigate = useNavigate();
  // Use places 2 to 5 for variety
  const recommendedPlaces = PLACES.slice(2, 6);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Recommended for You
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-indigo-500" /> LocAI Match
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Places we think you'll love based on your vibe and preferences.
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/places')}
          rightIcon={ArrowRight}
          className="text-xs text-indigo-600 font-semibold hover:bg-indigo-50 self-start sm:self-auto"
        >
          See all recommendations
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedPlaces;
