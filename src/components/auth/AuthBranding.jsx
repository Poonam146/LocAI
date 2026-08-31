import React from 'react';
import { MapPin, Sparkles, Coffee, Utensils, Star, Compass } from 'lucide-react';
import Badge from '../ui/Badge';

export const AuthBranding = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col justify-between min-h-[500px] lg:min-h-full">
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      {/* Top Branding Header */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <MapPin className="w-5 h-5 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tight leading-tight">
              Loc<span className="text-indigo-400">AI</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
              Your AI Local Guide
            </span>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <Badge variant="indigo" size="sm" className="bg-indigo-500/20 text-indigo-300 border-indigo-400/30">
            <Sparkles className="w-3 h-3 mr-1 text-indigo-300" /> AI Local Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Discover places.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              Explore smarter.
            </span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md">
            Find the places you love, get personalized recommendations, and plan your next adventure with LocAI.
          </p>
        </div>
      </div>

      {/* Middle/Bottom Stylized HTML/CSS Discovery Illustration */}
      <div className="relative z-10 my-8 space-y-4">
        {/* Floating Card 1: Roastery Coffee House */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md hover:border-indigo-500/40 transition-colors transform -rotate-1 hover:rotate-0 duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Roastery Coffee House</h4>
                <p className="text-[11px] text-slate-400">Banjara Hills • 1.2 km</p>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-800/40">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.6</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-indigo-300 font-medium">✨ "Great for studying"</span>
            <span className="text-emerald-400 font-semibold">Open Now</span>
          </div>
        </div>

        {/* Floating Card 2: Spice Route */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md hover:border-indigo-500/40 transition-colors transform rotate-1 hover:rotate-0 duration-200 ml-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Spice Route Fine Dining</h4>
                <p className="text-[11px] text-slate-400">Jubilee Hills • 2.8 km</p>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-800/40">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.5</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-indigo-300 font-medium">✨ "Perfect for dinner"</span>
            <span className="text-indigo-400 font-semibold">₹₹₹</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Quote */}
      <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Trusted by local explorers</span>
        <span className="text-indigo-400 font-medium flex items-center gap-1">
          <Compass className="w-3 h-3" /> LocAI Portal 2026
        </span>
      </div>
    </div>
  );
};

export default AuthBranding;
