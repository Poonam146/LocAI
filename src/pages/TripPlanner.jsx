import React from 'react';
import { Sparkles } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export const TripPlanner = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Trip Planner</h1>
          <p className="text-sm text-slate-500">Generate multi-stop daily itineraries customized to your interests and budget.</p>
        </div>
        <Badge variant="indigo">Route: /trip-planner</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Itinerary Builder Placeholder</CardTitle>
          <CardDescription>Drag-and-drop itinerary timelines, route optimization algorithms, and travel duration estimators will be featured here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Trip Planner Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TripPlanner;
