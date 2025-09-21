import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AdminService, ContentPage } from '@/services/adminService';
import { PlusCircle, Edit, Trash2, Eye, Search } from 'lucide-react';
import { toast } from 'sonner';

export function ContentManager() {
  const [pages, setPages] = useState<ContentPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState<ContentPage | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const data = await AdminService.getContentPages();
      setPages(data);
    } catch (error) {
      console.error('Error loading pages:', error);
      toast.error('Failed to load content pages');
    } finally {
      setLoading(false);
    }
  };

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditPage = (page: ContentPage) => {
    setSelectedPage(page);
    setIsEditDialogOpen(true);
  };

  const handleCreatePage = () => {
    setSelectedPage(null);
    setIsCreateDialogOpen(true);
  };

  const handleSavePage = async (pageData: Partial<ContentPage>) => {
    try {
      if (selectedPage) {
        await AdminService.updateContentPage(selectedPage.id, pageData);
        toast.success('Page updated successfully');
      } else {
        await AdminService.createContentPage(pageData as Omit<ContentPage, 'id' | 'created_at' | 'updated_at'>);
        toast.success('Page created successfully');
      }
      setIsEditDialogOpen(false);
      setIsCreateDialogOpen(false);
      setSelectedPage(null);
      loadPages();
    } catch (error) {
      console.error('Error saving page:', error);
      toast.error('Failed to save page');
    }
  };

  const handleDeletePage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;
    
    try {
      await AdminService.deleteContentPage(id);
      toast.success('Page deleted successfully');
      loadPages();
    } catch (error) {
      console.error('Error deleting page:', error);
      toast.error('Failed to delete page');
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
          <h2 className="text-2xl font-bold">Content Management</h2>
          <p className="text-muted-foreground">Manage pages, sections, and dynamic content</p>
        </div>
        <Button onClick={handleCreatePage}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Page
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Content Pages</CardTitle>
              <CardDescription>Manage all your website pages and content</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search pages..."
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
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{page.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {page.meta_description?.substring(0, 60)}...
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      /{page.slug}
                    </code>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        page.status === 'published'
                          ? 'default'
                          : page.status === 'draft'
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {page.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(page.updated_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/${page.slug}`, '_blank')}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditPage(page)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePage(page.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen || isCreateDialogOpen} onOpenChange={(open) => {
        setIsEditDialogOpen(open);
        setIsCreateDialogOpen(open);
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedPage ? 'Edit Page' : 'Create New Page'}
            </DialogTitle>
            <DialogDescription>
              {selectedPage ? 'Update page content and settings' : 'Create a new content page'}
            </DialogDescription>
          </DialogHeader>
          <PageEditForm
            page={selectedPage}
            onSave={handleSavePage}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PageEditForm({ page, onSave }: { page: ContentPage | null; onSave: (data: Partial<ContentPage>) => void }) {
  const [formData, setFormData] = useState({
    title: page?.title || '',
    slug: page?.slug || '',
    meta_title: page?.meta_title || '',
    meta_description: page?.meta_description || '',
    status: page?.status || 'draft',
    content: page?.content || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: !page ? generateSlug(title) : formData.slug, // Only auto-generate for new pages
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Page Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="slug">URL Slug</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="meta_title">SEO Title</Label>
        <Input
          id="meta_title"
          value={formData.meta_title}
          onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
          placeholder="SEO optimized title"
        />
      </div>

      <div>
        <Label htmlFor="meta_description">Meta Description</Label>
        <Textarea
          id="meta_description"
          value={formData.meta_description}
          onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
          rows={3}
          placeholder="Page description for search engines"
        />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <select
          id="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="w-full p-2 border rounded-md"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
        </select>
      </div>

      <div>
        <Label>Page Content</Label>
        <div className="border rounded-md p-4 min-h-64 bg-muted">
          <p className="text-muted-foreground">
            Visual page builder would go here. For now, content is stored as JSON.
          </p>
          <pre className="text-xs mt-2 text-muted-foreground">
            {JSON.stringify(formData.content, null, 2)}
          </pre>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">
          {page ? 'Update Page' : 'Create Page'}
        </Button>
      </div>
    </form>
  );
}