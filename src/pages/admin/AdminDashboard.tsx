import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  FileText,
  ImageIcon,
  ShoppingBag,
  Settings,
  Activity,
  BarChart3,
  PlusCircle
} from 'lucide-react';
import { MealsManager } from './MealsManager';
import { ContentManager } from './ContentManager';
import { MediaManager } from './MediaManager';
import { UserManager } from './UserManager';
import { AuditLogs } from './AuditLogs';
import LandingPageManager from './LandingPageManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Meals',
      value: '156',
      change: '+5%',
      icon: ShoppingBag,
      color: 'text-green-600'
    },
    {
      title: 'Content Pages',
      value: '23',
      change: '+2%',
      icon: FileText,
      color: 'text-purple-600'
    },
    {
      title: 'Media Files',
      value: '892',
      change: '+18%',
      icon: ImageIcon,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">ZestyMonk Admin</h1>
              <p className="text-muted-foreground">Manage your platform content and settings</p>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Quick Actions
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="meals">Meals</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="logs">Audit Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                      {' '}from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest system activities and changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New meal added', time: '2 minutes ago', user: 'Admin' },
                      { action: 'Content updated', time: '5 minutes ago', user: 'Editor' },
                      { action: 'User registered', time: '10 minutes ago', user: 'System' },
                      { action: 'Media uploaded', time: '15 minutes ago', user: 'Admin' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">by {activity.user}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Quick Stats
                  </CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Draft Content</span>
                      <Badge variant="outline">12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pending Orders</span>
                      <Badge variant="outline">45</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Low Stock Items</span>
                      <Badge variant="destructive">3</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Subscriptions</span>
                      <Badge variant="default">234</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="landing">
            <LandingPageManager />
          </TabsContent>

          <TabsContent value="meals">
            <MealsManager />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="media">
            <MediaManager />
          </TabsContent>

          <TabsContent value="users">
            <UserManager />
          </TabsContent>

          <TabsContent value="logs">
            <AuditLogs />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}