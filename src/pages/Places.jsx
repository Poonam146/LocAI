import React from 'react';
import { MapPin } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { CATEGORIES } from '../data/mockData';

export const Places = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Places Directory</h1>
          <p className="text-sm text-slate-500">Browse categories ranging from Restaurants and Cafés to Hospitals and ATMs.</p>
        </div>
        <Badge variant="indigo">Route: /places</Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="p-3 bg-white border border-slate-200 rounded-xl text-center shadow-xs">
            <span className="text-xs font-semibold text-slate-800">{cat.label}</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">{cat.count} listings</span>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Places Catalog Placeholder</CardTitle>
          <CardDescription>Filtering by rating, distance, price range, and status will be added here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Places Directory Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Places;
