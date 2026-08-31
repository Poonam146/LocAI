import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';

export const ReviewSummary = ({ reviewSummary }) => {
  if (!reviewSummary) return null;

  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-indigo-200/80 shadow-xs">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-extrabold text-indigo-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
          AI Review Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {reviewSummary.summaryText}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-indigo-100/80 text-xs">
          {/* Pros */}
          <div className="space-y-2">
            <span className="font-bold text-emerald-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              What people love
            </span>
            <ul className="space-y-1">
              {reviewSummary.pros.map((pro, i) => (
                <li key={i} className="text-slate-600 text-[11px] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="space-y-2">
            <span className="font-bold text-amber-800 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Common concerns
            </span>
            <ul className="space-y-1">
              {reviewSummary.cons.map((con, i) => (
                <li key={i} className="text-slate-600 text-[11px] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummary;
