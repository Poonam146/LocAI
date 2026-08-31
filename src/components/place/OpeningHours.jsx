import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

export const OpeningHours = ({ openingHours = {}, openStatus = 'Open Now' }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayIndex = new Date().getDay();
  const currentDayName = days[todayIndex];

  const defaultHours = {
    Monday: '8:00 AM – 11:00 PM',
    Tuesday: '8:00 AM – 11:00 PM',
    Wednesday: '8:00 AM – 11:00 PM',
    Thursday: '8:00 AM – 11:00 PM',
    Friday: '8:00 AM – 12:00 AM',
    Saturday: '9:00 AM – 12:00 AM',
    Sunday: '9:00 AM – 11:00 PM',
  };

  const schedule = Object.keys(openingHours).length > 0 ? openingHours : defaultHours;

  return (
    <div className="space-y-3 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-600" />
          Opening Hours
        </h3>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          ● {openStatus}
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        {days.map((day) => {
          const isToday = day === currentDayName;
          const hours = schedule[day] || '8:00 AM – 11:00 PM';

          return (
            <div
              key={day}
              className={cn(
                'flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors',
                isToday
                  ? 'bg-indigo-50 text-indigo-900 font-bold border border-indigo-100'
                  : 'text-slate-600 hover:bg-slate-50'
              )}
            >
              <div className="flex items-center gap-2">
                <span>{day}</span>
                {isToday && (
                  <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-100 px-1.5 py-0.2 rounded">
                    Today
                  </span>
                )}
              </div>
              <span className={cn(isToday ? 'text-indigo-900 font-bold' : 'text-slate-800 font-medium')}>
                {hours}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpeningHours;
