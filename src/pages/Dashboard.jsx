import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSearch from '../components/dashboard/DashboardSearch';
import QuickCategories from '../components/dashboard/QuickCategories';
import NearbyPlaces from '../components/dashboard/NearbyPlaces';
import MockMap from '../components/dashboard/MockMap';
import RecommendedPlaces from '../components/dashboard/RecommendedPlaces';
import WeatherCard from '../components/dashboard/WeatherCard';
import AIInsightCard from '../components/dashboard/AIInsightCard';
import QuickActions from '../components/dashboard/QuickActions';
import Toast from '../components/ui/Toast';

export const Dashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('Hyderabad, India');
  const [toastState, setToastState] = useState({ isVisible: false, message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToastState({ isVisible: true, message, type });
  };

  return (
    <div className="space-y-8 py-2">
      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState((prev) => ({ ...prev, isVisible: false }))}
      />

      {/* 1. Dashboard Header & Greeting */}
      <DashboardHeader
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        onToast={showToast}
      />

      {/* 2. Prominent AI Search Bar */}
      <DashboardSearch onToast={showToast} />

      {/* 3. Quick Categories Bar */}
      <QuickCategories />

      {/* 4. Two-Column Grid: Nearby Places & Interactive Mock Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-4">
          <NearbyPlaces />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Interactive Map Radar
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {selectedLocation}
            </span>
          </div>
          <MockMap selectedLocation={selectedLocation} onToast={showToast} />
        </div>
      </div>

      {/* 5. Recommended For You Section */}
      <RecommendedPlaces />

      {/* 6. Two-Column Weather & AI Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherCard selectedLocation={selectedLocation} />
        <AIInsightCard selectedLocation={selectedLocation} />
      </div>

      {/* 7. Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default Dashboard;
