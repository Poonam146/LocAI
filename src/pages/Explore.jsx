import React from 'react';
import { Compass } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export const Explore = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Explore Nearby</h1>
          <p className="text-sm text-slate-500">Discover top rated venues, parks, and essential services near your location.</p>
        </div>
        <Badge variant="indigo">Route: /explore</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explore Feed Placeholder</CardTitle>
          <CardDescription>Interactive map view, radius search filter, and category carousels will be added here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Explore Page Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Explore;
