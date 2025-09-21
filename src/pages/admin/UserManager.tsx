import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AdminService, UserRole } from '@/services/adminService';
import { supabase } from '@/integrations/supabase/client';
import { Search, UserCheck, Shield, Eye, Edit } from 'lucide-react';
import { toast } from 'sonner';

interface UserWithRole {
  id: string;
  email: string;
  created_at: string;
  role?: string;
  profile?: {
    first_name?: string;
    last_name?: string;
    subscription_status?: string;
  };
}

export function UserManager() {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      
      // Get users from profiles table (since we can't access auth.users directly)
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Get user roles
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('*');

      if (rolesError) throw rolesError;

      // Combine the data
      const usersWithRoles = profiles?.map(profile => {
        const userRole = roles?.find(role => role.user_id === profile.user_id);
        return {
          id: profile.user_id,
          email: profile.first_name + '@example.com', // Placeholder since we don't have email access
          created_at: profile.created_at,
          role: userRole?.role || 'user',
          profile: {
            first_name: profile.first_name,
            last_name: profile.last_name,
            subscription_status: profile.subscription_status,
          }
        };
      }) || [];

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error loading users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await AdminService.assignRole(userId, newRole as any);
      toast.success('User role updated successfully');
      loadUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
      toast.error('Failed to update user role');
    }
  };

  const filteredUsers = users.filter(user =>
    user.profile?.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.profile?.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'editor': return 'default';
      case 'viewer': return 'secondary';
      default: return 'outline';
    }
  };

  const getSubscriptionBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'cancelled': return 'destructive';
      case 'paused': return 'secondary';
      default: return 'outline';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-muted-foreground">Manage user accounts, roles, and permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <UserCheck className="mr-2 h-4 w-4" />
            Invite User
          </Button>
          <Button>
            <Shield className="mr-2 h-4 w-4" />
            Role Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Users', value: users.length, icon: '👥' },
          { title: 'Admins', value: users.filter(u => u.role === 'admin').length, icon: '🛡️' },
          { title: 'Active Subscriptions', value: users.filter(u => u.profile?.subscription_status === 'active').length, icon: '✅' },
          { title: 'New This Month', value: users.filter(u => new Date(u.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length, icon: '📈' }
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <span className="text-xl">{stat.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {user.profile?.first_name && user.profile?.last_name
                          ? `${user.profile.first_name} ${user.profile.last_name}`
                          : 'Unknown User'
                        }
                      </p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={user.role}
                      onValueChange={(value) => handleRoleChange(user.id, value)}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue>
                          <Badge variant={getRoleBadgeVariant(user.role || 'user')}>
                            {user.role || 'user'}
                          </Badge>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getSubscriptionBadgeVariant(user.profile?.subscription_status || 'inactive')}>
                      {user.profile?.subscription_status || 'inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}