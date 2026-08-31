import React from 'react';
import { Shield } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export const Admin = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Control Portal</h1>
          <p className="text-sm text-slate-500">Manage directory categories, place verifications, and portal analytics.</p>
        </div>
        <Badge variant="error">Route: /admin</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Dashboard Placeholder</CardTitle>
          <CardDescription>Listing approval queues, place dataset upload forms, and user activity metrics will be rendered here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Admin Control Portal Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
