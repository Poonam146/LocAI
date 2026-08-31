import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AI_INSIGHTS } from '../../data/dashboard';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';
import Button from '../ui/Button';

export const AIInsightCard = ({ selectedLocation = 'Hyderabad, India' }) => {
  const navigate = useNavigate();
  const insight = AI_INSIGHTS[selectedLocation] || AI_INSIGHTS['Hyderabad, India'];

  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-indigo-200/80 shadow-xs">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
          LocAI Insight
        </CardTitle>
        <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
          Live Recommendation
        </span>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
            ✨ {insight.headline}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
            {insight.body}
          </p>
        </div>

        <div className="pt-2 border-t border-indigo-100/80 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/explore')}
            rightIcon={ArrowRight}
            className="text-xs text-indigo-600 font-bold hover:bg-indigo-100/60"
          >
            Explore suggestions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightCard;
