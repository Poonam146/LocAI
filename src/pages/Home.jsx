import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Search,
  MapPin,
  ArrowRight,
  Utensils,
  Coffee,
  Bed,
  Trees,
  Landmark,
  ShoppingBag,
  Cross,
  Fuel,
  CreditCard,
  Building2,
  MessageSquareText,
  Star,
  Bot,
  Target,
  Luggage,
  CloudSun,
  Globe2,
  CheckCircle2
} from 'lucide-react';

import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CategoryCard from '../components/common/CategoryCard';
import PlaceCard from '../components/common/PlaceCard';
import { PLACES } from '../data/places';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const exampleSearches = [
    'Best cafés nearby',
    'Places for a first date',
    'Affordable restaurants',
    'Things to do today',
  ];

  const categories = [
    { label: 'Restaurants', icon: Utensils, count: '140+ places' },
    { label: 'Cafés', icon: Coffee, count: '95+ places' },
    { label: 'Hotels', icon: Bed, count: '60+ listings' },
    { label: 'Parks', icon: Trees, count: '35+ spaces' },
    { label: 'Tourist Places', icon: Landmark, count: '50+ spots' },
    { label: 'Shopping', icon: ShoppingBag, count: '120+ stores' },
    { label: 'Hospitals', icon: Cross, count: '25+ centers' },
    { label: 'Petrol Pumps', icon: Fuel, count: '40+ stations' },
    { label: 'Temples', icon: Building2, count: '30+ shrines' },
    { label: 'ATMs', icon: CreditCard, count: '75+ locations' },
  ];

  const aiFeatures = [
    {
      icon: Bot,
      title: 'Smart Search',
      description: "Search naturally in your own words instead of adjusting rigid filter options.",
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: "Get suggestions tailored specifically to your budget, vibe, and travel preferences.",
    },
    {
      icon: Luggage,
      title: 'AI Trip Planner',
      description: "Build a complete day plan around your time, starting point, and favorite activities.",
    },
    {
      icon: Star,
      title: 'Review Summaries',
      description: "Understand what people love and dislike about a place in a single AI summary.",
    },
    {
      icon: CloudSun,
      title: 'Local Insights',
      description: "Get weather warnings, peak crowd hours, and useful tips before you visit.",
    },
    {
      icon: Globe2,
      title: 'Multilingual Assistant',
      description: "Ask questions and get instant local guidance in your preferred language.",
    },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="space-y-16 py-4">
      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <span>✨</span>
              <span>AI-powered local discovery</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Explore Your City.{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Smarter with AI.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Discover the best places around you, get personalized recommendations, and plan unforgettable trips with your AI-powered local guide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                leftIcon={Compass}
                onClick={() => navigate('/explore')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30"
              >
                Start Exploring
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={Sparkles}
                onClick={() => navigate('/assistant')}
                className="border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                Ask LocAI
              </Button>
            </div>
          </div>

          {/* Right Desktop Stylized HTML/CSS Mock Map Visual */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-slate-950/80 rounded-2xl border border-slate-800/80 p-5 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
              {/* Stylized Grid Lines Background */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#818cf8 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Top Map Header Bar */}
              <div className="relative z-10 flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 px-4 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-300">LocAI Live Radar • Banjara Hills</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 border border-indigo-800/60 px-2 py-0.5 rounded">
                  GPS Active
                </span>
              </div>

              {/* Pins & Markers Layer */}
              <div className="relative z-10 my-4 h-44">
                {/* Pin 1 */}
                <div className="absolute top-4 left-6 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 text-white px-2.5 py-1 rounded-full text-xs shadow-md animate-bounce duration-1000">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20" />
                  <span className="font-semibold text-[11px]">KBR Park</span>
                  <span className="text-[10px] text-amber-400 font-bold">★ 4.8</span>
                </div>

                {/* Pin 2 */}
                <div className="absolute top-16 right-8 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 text-white px-2.5 py-1 rounded-full text-xs shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  <span className="font-semibold text-[11px]">Olive Bistro</span>
                </div>

                {/* Center Pulse Pin */}
                <div className="absolute bottom-6 left-1/3 flex items-center gap-2">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/40 animate-ping absolute" />
                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white relative z-10 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-800/80 px-2 py-0.5 rounded-full">
                    You are here
                  </span>
                </div>
              </div>

              {/* Highlighted Recommendation Card */}
              <div className="relative z-10 bg-gradient-to-r from-slate-900 to-indigo-950/90 border border-indigo-500/40 rounded-xl p-3.5 shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white truncate">Roastery Coffee House</h4>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-1.5 py-0.5 rounded">
                      ★ 4.6
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    "Great for working & relaxing"
                  </p>
                  <span className="text-[10px] font-medium text-emerald-400 block mt-1">
                    ✨ Top Pick for Coffee Lovers • 1.2 km away
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. SEARCH SECTION
         ========================================== */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What are you looking for?
          </h2>
          <p className="text-sm text-slate-500">
            Tell LocAI what you need in your own words.
          </p>
        </div>

        <form onSubmit={handleSearchSubmit} className="space-y-3">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-indigo-600">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try 'quiet café under ₹500 near me'"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-28 py-3.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors shadow-inner"
            />
            <div className="absolute right-2 flex items-center gap-1.5">
              <button
                type="button"
                className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                title="Use Current Location"
                aria-label="Use current location"
              >
                <MapPin className="w-4 h-4" />
              </button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="rounded-xl px-4 py-2 text-xs font-semibold"
              >
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* Quick Example Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-medium mr-1">Try searching:</span>
          {exampleSearches.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setSearchQuery(prompt)}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200/80 transition-colors cursor-pointer"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </section>

      {/* ==========================================
          3. POPULAR CATEGORIES
         ========================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Explore by Category
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Find exactly what you need, wherever you are.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/explore')}
            rightIcon={ArrowRight}
            className="text-indigo-600 font-semibold self-start sm:self-auto"
          >
            All Categories
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.label}
              label={cat.label}
              icon={cat.icon}
              count={cat.count}
              path="/explore"
            />
          ))}
        </div>
      </section>

      {/* ==========================================
          4. FEATURED PLACES
         ========================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Near You
              </h2>
              <Badge variant="indigo" size="sm">Top Picks</Badge>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Handpicked local recommendations verified by community ratings & AI tags.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/places')}
            rightIcon={ArrowRight}
            className="self-start sm:self-auto text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            View All Places
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACES.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* ==========================================
          5. HOW LOCAI WORKS
         ========================================== */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="indigo" size="sm" className="bg-indigo-500/20 text-indigo-300 border-indigo-400/30">
            Simple 3-Step Guide
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How LocAI Works
          </h2>
          <p className="text-sm text-slate-400">
            From search to arrival, LocAI streamlines your local exploration experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto text-lg font-black shadow-md shadow-indigo-600/30">
              01
            </div>
            <h3 className="text-base font-bold text-white">Tell us what you need</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Describe what you're looking for in natural language, like "Cozy cafe with WiFi under ₹400".
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mx-auto text-lg font-black shadow-md shadow-purple-600/30">
              02
            </div>
            <h3 className="text-base font-bold text-white">LocAI finds the best options</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Discover places matching your exact location, preferences, distance, and current budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto text-lg font-black shadow-md shadow-indigo-600/30">
              03
            </div>
            <h3 className="text-base font-bold text-white">Explore with confidence</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Compare AI review summaries, view details, get directions, and save places for future visits.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. AI-POWERED FEATURES
         ========================================== */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            More Than Just a Map
          </h2>
          <p className="text-sm text-slate-500">
            AI that understands what you actually want.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover-card-rise space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          7. EXPLORE YOUR CITY CTA
         ========================================== */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white p-8 sm:p-12 shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your city has more to offer.
          </h2>
          <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
            Let LocAI help you discover places worth visiting, hidden gems worth finding, and experiences worth remembering.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/explore')}
              rightIcon={ArrowRight}
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold shadow-lg"
            >
              Explore Nearby
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/assistant')}
              leftIcon={Sparkles}
              className="border-white/40 text-white hover:bg-white/10"
            >
              Ask LocAI
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
