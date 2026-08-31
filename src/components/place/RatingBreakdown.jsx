import React from 'react';
import { Star } from 'lucide-react';

export const RatingBreakdown = ({ rating = 4.6, reviewCount = 1240 }) => {
  const breakdown = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
      {/* Left Rating Summary */}
      <div className="text-center sm:text-left shrink-0 space-y-1">
        <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
          {rating}
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Math.floor(rating)
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-slate-200 text-slate-200'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Based on {reviewCount} reviews
        </div>
      </div>

      {/* Right Percentage Bars */}
      <div className="flex-1 w-full space-y-1.5">
        {breakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-3 text-xs">
            <span className="w-8 text-slate-600 font-medium">{row.stars} ★</span>
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${row.percentage}%` }}
              />
            </div>
            <span className="w-8 text-right text-slate-400 font-medium">{row.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingBreakdown;
