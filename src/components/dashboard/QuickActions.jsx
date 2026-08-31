import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Bot, Sparkles, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Explore Nearby',
      description: 'Discover local places & top spots',
      icon: Compass,
      path: '/explore',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      title: 'Ask LocAI',
      description: 'Instant AI recommendations & answers',
      icon: Bot,
      path: '/assistant',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      title: 'Plan a Trip',
      description: 'Build custom multi-stop itineraries',
      icon: Sparkles,
      path: '/trip-planner',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      title: 'Saved Places',
      description: 'Access bookmarked spots & lists',
      icon: Heart,
      path: '/saved',
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.title}
              onClick={() => navigate(act.path)}
              className="group p-4 bg-white border border-slate-200/80 rounded-2xl text-left shadow-xs hover-card-rise transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className={cn('w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105', act.color)}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {act.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                  {act.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
