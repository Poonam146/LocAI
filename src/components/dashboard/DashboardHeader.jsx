import React from 'react';
import { MOCK_USER } from '../../data/mockData';
import LocationSelector from './LocationSelector';

export const DashboardHeader = ({ selectedLocation, onLocationChange, onToast }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good morning';
    if (hour >= 12 && hour < 17) return 'Good afternoon';
    if (hour >= 17 && hour < 22) return 'Good evening';
    return 'Good night';
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 border-b border-slate-200/60 pb-6">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {getGreeting()}, {MOCK_USER.name} 👋
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          What would you like to explore today?
        </p>
      </div>

      <div className="shrink-0">
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
          onToast={onToast}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
