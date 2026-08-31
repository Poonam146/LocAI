import React from 'react';
import { Sun, CloudSun, Droplets, Wind, RefreshCw } from 'lucide-react';
import { WEATHER_DATA } from '../../data/dashboard';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';

export const WeatherCard = ({ selectedLocation = 'Hyderabad, India' }) => {
  const weather = WEATHER_DATA[selectedLocation] || WEATHER_DATA['Hyderabad, India'];
  const cityName = selectedLocation.split(',')[0];

  return (
    <Card className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-indigo-800 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
          Local Weather • {cityName}
        </CardTitle>
        <span className="flex items-center gap-1 text-[10px] text-slate-400">
          <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin duration-3000" />
          Updated just now
        </span>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-amber-300">
              <CloudSun className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight text-white">
                {weather.temp}
              </div>
              <p className="text-xs text-indigo-200 font-medium">{weather.condition}</p>
            </div>
          </div>

          <div className="text-right text-xs space-y-0.5 text-slate-300">
            <p>Feels like <span className="font-semibold text-white">{weather.feelsLike}</span></p>
            <p className="text-[11px] text-emerald-400 font-medium">Good time to explore</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-indigo-800/80 text-xs">
          <div className="flex items-center gap-2 bg-slate-800/60 p-2 rounded-xl border border-slate-700/60">
            <Droplets className="w-3.5 h-3.5 text-sky-400" />
            <div>
              <span className="text-[10px] text-slate-400 block">Humidity</span>
              <span className="font-semibold text-white">{weather.humidity}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/60 p-2 rounded-xl border border-slate-700/60">
            <Wind className="w-3.5 h-3.5 text-indigo-300" />
            <div>
              <span className="text-[10px] text-slate-400 block">Wind Speed</span>
              <span className="font-semibold text-white">{weather.wind}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
