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
import { AdminService, AuditLog } from '@/services/adminService';
import { Search, Filter, Download, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export function AuditLogs() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAction, setFilterAction] = useState<string>('all');
  const [filterTable, setFilterTable] = useState<string>('all');

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      setLoading(true);
      const data = await AdminService.getAuditLogs(500);
      setLogs(data);
    } catch (error) {
      console.error('Error loading audit logs:', error);
      toast.error('Failed to load audit logs');
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.table_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.record_id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAction = filterAction === 'all' || log.action === filterAction;
    const matchesTable = filterTable === 'all' || log.table_name === filterTable;
    
    return matchesSearch && matchesAction && matchesTable;
  });

  const getActionBadgeVariant = (action: string) => {
    switch (action) {
      case 'insert': return 'default';
      case 'update': return 'secondary';
      case 'delete': return 'destructive';
      default: return 'outline';
    }
  };

  const uniqueTables = [...new Set(logs.map(log => log.table_name))];

  const formatChanges = (oldValues: any, newValues: any, action: string) => {
    if (action === 'insert') {
      return `Created new record with ${Object.keys(newValues || {}).length} fields`;
    }
    
    if (action === 'delete') {
      return `Deleted record with ${Object.keys(oldValues || {}).length} fields`;
    }
    
    if (action === 'update' && oldValues && newValues) {
      const changes = Object.keys(newValues).filter(key => 
        JSON.stringify(oldValues[key]) !== JSON.stringify(newValues[key])
      );
      return changes.length > 0 ? `Updated: ${changes.join(', ')}` : 'No changes detected';
    }
    
    return 'Unknown change';
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
          <h2 className="text-2xl font-bold">Audit Logs</h2>
          <p className="text-muted-foreground">Track all system changes and user activities</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={loadLogs}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Events', value: logs.length, color: 'text-blue-600' },
          { title: 'Inserts', value: logs.filter(l => l.action === 'insert').length, color: 'text-green-600' },
          { title: 'Updates', value: logs.filter(l => l.action === 'update').length, color: 'text-yellow-600' },
          { title: 'Deletes', value: logs.filter(l => l.action === 'delete').length, color: 'text-red-600' }
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>System-wide audit trail of all changes</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <Select value={filterAction} onValueChange={setFilterAction}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="insert">Insert</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterTable} onValueChange={setFilterTable}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Table" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tables</SelectItem>
                  {uniqueTables.map(table => (
                    <SelectItem key={table} value={table}>{table}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Table</TableHead>
                <TableHead>Record ID</TableHead>
                <TableHead>Changes</TableHead>
                <TableHead>User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(log.created_at).toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getActionBadgeVariant(log.action)}>
                      {log.action.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {log.table_name}
                    </code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs text-muted-foreground">
                      {log.record_id.substring(0, 8)}...
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm max-w-md truncate">
                      {formatChanges(log.old_values, log.new_values, log.action)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground">
                      {log.user_id ? `${log.user_id.substring(0, 8)}...` : 'System'}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredLogs.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No audit logs found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}