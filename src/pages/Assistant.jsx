import React from 'react';
import { Bot } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export const Assistant = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Guide Assistant</h1>
          <p className="text-sm text-slate-500">Ask questions about local spots, opening hours, recommendations, and transport options.</p>
        </div>
        <Badge variant="indigo">Route: /assistant</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Assistant Interface Placeholder</CardTitle>
          <CardDescription>Conversational chat window, prompt suggestions, and local guide intelligence interface will be integrated here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: AI Assistant Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assistant;
