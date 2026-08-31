import React from 'react';
import { User } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import { MOCK_USER } from '../data/mockData';

export const Profile = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Profile</h1>
          <p className="text-sm text-slate-500">Manage account preferences and travel settings.</p>
        </div>
        <Badge variant="indigo">Route: /profile</Badge>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Avatar name={MOCK_USER.name} size="xl" status="online" />
          <div>
            <CardTitle>{MOCK_USER.name}</CardTitle>
            <CardDescription>{MOCK_USER.email}</CardDescription>
            <div className="mt-2">
              <Badge variant="indigo" size="sm">{MOCK_USER.role}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 font-mono">
            Status: Profile Placeholder Active
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
