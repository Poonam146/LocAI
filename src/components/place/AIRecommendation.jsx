import React from 'react';
import { Sparkles, Target, Wallet, Clock } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';

export const AIRecommendation = ({ place }) => {
  if (!place) return null;

  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-indigo-200/80 shadow-xs">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-extrabold text-indigo-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
          Why LocAI recommends this
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {place.aiRecommendation ||
            `LocAI recommends ${place.name} because of its stellar community rating (${place.rating}★), convenient ${place.location} location, and great value.`}
        </p>

        {/* Metadata Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-indigo-100/80 text-xs">
          {place.bestFor && (
            <div className="flex items-center gap-2 bg-white border border-indigo-100 p-2 rounded-xl">
              <Target className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Best For</span>
                <span className="font-semibold text-slate-800">{place.bestFor}</span>
              </div>
            </div>
          )}

          {place.budget && (
            <div className="flex items-center gap-2 bg-white border border-indigo-100 p-2 rounded-xl">
              <Wallet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Estimated Budget</span>
                <span className="font-semibold text-slate-800">{place.budget}</span>
              </div>
            </div>
          )}

          {place.idealTime && (
            <div className="flex items-center gap-2 bg-white border border-indigo-100 p-2 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Ideal Visit Time</span>
                <span className="font-semibold text-slate-800">{place.idealTime}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendation;
