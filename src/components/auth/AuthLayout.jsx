import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import AuthBranding from './AuthBranding';

export const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      {/* Top Header Logo for quick return home */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between pb-4">
        <Link
          to="/"
          className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          aria-label="Return to LocAI Home"
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
            <MapPin className="w-4 h-4 fill-white/20" />
          </div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">
            Loc<span className="text-indigo-600">AI</span>
          </span>
        </Link>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="max-w-6xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Branding Section (Hidden on small mobile if needed, visible on lg) */}
        <div className="lg:col-span-6 hidden lg:block">
          <AuthBranding />
        </div>

        {/* Right Form Section */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            {children}
          </div>
        </div>
      </div>

      {/* Footer Copyright Notice */}
      <div className="max-w-7xl w-full mx-auto pt-6 text-center text-xs text-slate-400">
        © 2026 LocAI. All rights reserved. • Demo Authentication UI
      </div>
    </div>
  );
};

export default AuthLayout;
