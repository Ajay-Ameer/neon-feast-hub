import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { AdminService } from '@/services/adminService';
import { PlusCircle, Edit, Trash2, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

export function MealsManager() {
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    try {
      setLoading(true);
      const data = await AdminService.getMealsForAdmin();
      setMeals(data);
    } catch (error) {
      console.error('Error loading meals:', error);
      toast.error('Failed to load meals');
    } finally {
      setLoading(false);
    }
  };

  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meal.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditMeal = (meal: any) => {
    setSelectedMeal(meal);
    setIsEditDialogOpen(true);
  };

  const handleSaveMeal = async (mealData: any) => {
    try {
      if (selectedMeal) {
        await AdminService.updateMeal(selectedMeal.id, mealData);
        toast.success('Meal updated successfully');
      }
      setIsEditDialogOpen(false);
      setSelectedMeal(null);
      loadMeals();
    } catch (error) {
      console.error('Error saving meal:', error);
      toast.error('Failed to save meal');
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
          <h2 className="text-2xl font-bold">Meals Management</h2>
          <p className="text-muted-foreground">Manage your meal catalog, pricing, and availability</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Meal
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Meal Catalog</CardTitle>
              <CardDescription>View and edit all meals in your catalog</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search meals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Meal</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMeals.map((meal) => (
                <TableRow key={meal.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {meal.image_url && (
                        <img
                          src={meal.image_url}
                          alt={meal.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                      )}
                      <div>
                        <p className="font-medium">{meal.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {meal.description?.substring(0, 50)}...
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {meal.category?.name || 'Uncategorized'}
                    </Badge>
                  </TableCell>
                  <TableCell>₹{meal.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={meal.stock_quantity > meal.min_stock_alert ? 'default' : 'destructive'}
                    >
                      {meal.stock_quantity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={meal.is_available ? 'default' : 'secondary'}>
                      {meal.is_available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditMeal(meal)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Meal</DialogTitle>
            <DialogDescription>
              Update meal details, pricing, and availability
            </DialogDescription>
          </DialogHeader>
          {selectedMeal && (
            <MealEditForm meal={selectedMeal} onSave={handleSaveMeal} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MealEditForm({ meal, onSave }: { meal: any; onSave: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: meal.name || '',
    description: meal.description || '',
    price: meal.price || 0,
    cost_price: meal.cost_price || 0,
    stock_quantity: meal.stock_quantity || 0,
    min_stock_alert: meal.min_stock_alert || 10,
    is_available: meal.is_available || false,
    is_featured: meal.is_featured || false,
    sku: meal.sku || '',
    seo_title: meal.seo_title || '',
    seo_description: meal.seo_description || '',
    sort_order: meal.sort_order || 0,
    tags: meal.tags?.join(', ') || '',
    dietary_tags: meal.dietary_tags?.join(', ') || '',
    allergens: meal.allergens?.join(', ') || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      dietary_tags: formData.dietary_tags.split(',').map(tag => tag.trim()).filter(Boolean),
      allergens: formData.allergens.split(',').map(tag => tag.trim()).filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Meal Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="sku">SKU</Label>
              <Input
                id="sku"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="healthy, protein, low-carb"
              />
            </div>
            <div>
              <Label htmlFor="dietary_tags">Dietary Tags</Label>
              <Input
                id="dietary_tags"
                value={formData.dietary_tags}
                onChange={(e) => setFormData({ ...formData, dietary_tags: e.target.value })}
                placeholder="vegan, gluten-free, keto"
              />
            </div>
            <div>
              <Label htmlFor="allergens">Allergens</Label>
              <Input
                id="allergens"
                value={formData.allergens}
                onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
                placeholder="nuts, dairy, eggs"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="is_available"
                checked={formData.is_available}
                onCheckedChange={(checked) => setFormData({ ...formData, is_available: checked })}
              />
              <Label htmlFor="is_available">Available</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
              />
              <Label htmlFor="is_featured">Featured</Label>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="price">Selling Price (₹)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                required
              />
            </div>
            <div>
              <Label htmlFor="cost_price">Cost Price (₹)</Label>
              <Input
                id="cost_price"
                type="number"
                step="0.01"
                value={formData.cost_price}
                onChange={(e) => setFormData({ ...formData, cost_price: parseFloat(e.target.value) || 0 })}
              />
            </div>
            <div>
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stock_quantity">Stock Quantity</Label>
              <Input
                id="stock_quantity"
                type="number"
                value={formData.stock_quantity}
                onChange={(e) => setFormData({ ...formData, stock_quantity: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div>
              <Label htmlFor="min_stock_alert">Minimum Stock Alert</Label>
              <Input
                id="min_stock_alert"
                type="number"
                value={formData.min_stock_alert}
                onChange={(e) => setFormData({ ...formData, min_stock_alert: parseInt(e.target.value) || 10 })}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <div>
            <Label htmlFor="seo_title">SEO Title</Label>
            <Input
              id="seo_title"
              value={formData.seo_title}
              onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
              placeholder="SEO optimized title"
            />
          </div>
          <div>
            <Label htmlFor="seo_description">SEO Description</Label>
            <Textarea
              id="seo_description"
              value={formData.seo_description}
              onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
              rows={3}
              placeholder="Meta description for search engines"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}