import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import PlaceCard from '../common/PlaceCard';
import Button from '../ui/Button';
import { PLACES } from '../../data/places';

export const NearbyPlaces = () => {
  const navigate = useNavigate();
  const nearbyPlaces = PLACES.slice(0, 4);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Nearby Places
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            (Within 3 km)
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/places')}
          rightIcon={ArrowRight}
          className="text-xs text-indigo-600 font-semibold hover:bg-indigo-50"
        >
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nearbyPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
