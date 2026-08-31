import React from 'react';
import { Bookmark } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export const Saved = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Saved Places</h1>
          <p className="text-sm text-slate-500">Access your bookmarked spots and custom collections.</p>
        </div>
        <Badge variant="indigo">Route: /saved</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bookmarks & Collections Placeholder</CardTitle>
          <CardDescription>Saved places list, custom folder organization, and offline mode sync will be placed here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Saved Places Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Saved;
