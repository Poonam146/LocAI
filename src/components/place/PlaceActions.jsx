import React, { useState } from 'react';
import { Navigation, Phone, Globe, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

export const PlaceActions = ({ place, onToast }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleDirections = () => {
    onToast('Directions will be available when Maps integration is connected.');
  };

  const handleCall = () => {
    onToast(`Calling ${place?.phone || '+91 98765 43210'} (Mock call)`);
  };

  const handleWebsite = () => {
    onToast('Website placeholder opened.');
  };

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
    onToast(isSaved ? 'Removed from saved places' : 'Saved to your collection!');
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
      <Button
        variant="primary"
        size="md"
        leftIcon={Navigation}
        onClick={handleDirections}
        className="bg-indigo-600 hover:bg-indigo-700 font-semibold"
      >
        Directions
      </Button>

      <Button
        variant="outline"
        size="md"
        leftIcon={Phone}
        onClick={handleCall}
        className="text-slate-700 border-slate-200 hover:bg-slate-50"
      >
        Call
      </Button>

      <Button
        variant="outline"
        size="md"
        leftIcon={Globe}
        onClick={handleWebsite}
        className="text-slate-700 border-slate-200 hover:bg-slate-50"
      >
        Website
      </Button>

      <Button
        variant={isSaved ? 'danger' : 'outline'}
        size="md"
        leftIcon={Heart}
        onClick={handleToggleSave}
        className={cn(
          isSaved
            ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-500'
            : 'text-slate-700 border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200'
        )}
      >
        {isSaved ? 'Saved' : 'Save'}
      </Button>
    </div>
  );
};

export default PlaceActions;
