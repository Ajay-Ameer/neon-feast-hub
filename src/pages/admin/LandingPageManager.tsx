import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LandingPageService, LandingPageContent } from '@/services/landingPageService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';

const LandingPageManager = () => {
  const [content, setContent] = useState<LandingPageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<any>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const data = await LandingPageService.getAllContent();
      setContent(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: LandingPageContent) => {
    setEditingId(item.id);
    setEditingContent(JSON.stringify(item.content, null, 2));
  };

  const handleSave = async (id: string) => {
    try {
      const parsedContent = JSON.parse(editingContent);
      await LandingPageService.updateContent(id, parsedContent);
      toast({
        title: "Success",
        description: "Content updated successfully"
      });
      setEditingId(null);
      setEditingContent(null);
      loadContent();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await LandingPageService.toggleActive(id, !currentStatus);
      toast({
        title: "Success",
        description: `Content ${!currentStatus ? 'activated' : 'deactivated'} successfully`
      });
      loadContent();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const renderHeroEditor = (item: LandingPageContent) => {
    const heroContent = item.content;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label>Title</Label>
            <Textarea
              value={heroContent.title || ''}
              onChange={(e) => {
                const newContent = { ...heroContent, title: e.target.value };
                setEditingContent(JSON.stringify(newContent, null, 2));
              }}
              rows={2}
            />
          </div>
          
          <div>
            <Label>Subtitle</Label>
            <Textarea
              value={heroContent.subtitle || ''}
              onChange={(e) => {
                const newContent = { ...heroContent, subtitle: e.target.value };
                setEditingContent(JSON.stringify(newContent, null, 2));
              }}
              rows={3}
            />
          </div>

          <div>
            <Label>Feature Badges (comma-separated)</Label>
            <Input
              value={heroContent.badges?.join(', ') || ''}
              onChange={(e) => {
                const badges = e.target.value.split(',').map(b => b.trim());
                const newContent = { ...heroContent, badges };
                setEditingContent(JSON.stringify(newContent, null, 2));
              }}
            />
          </div>

          <div className="space-y-4">
            <Label>CTA Buttons</Label>
            {heroContent.cta_buttons?.map((btn: any, idx: number) => (
              <div key={idx} className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                <div>
                  <Label>Button Text</Label>
                  <Input
                    value={btn.text}
                    onChange={(e) => {
                      const newButtons = [...heroContent.cta_buttons];
                      newButtons[idx].text = e.target.value;
                      const newContent = { ...heroContent, cta_buttons: newButtons };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                </div>
                <div>
                  <Label>Link</Label>
                  <Input
                    value={btn.link}
                    onChange={(e) => {
                      const newButtons = [...heroContent.cta_buttons];
                      newButtons[idx].link = e.target.value;
                      const newContent = { ...heroContent, cta_buttons: newButtons };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Label>Carousel Meals</Label>
            {heroContent.carousel_meals?.map((meal: any, idx: number) => (
              <div key={idx} className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                <div>
                  <Label>Meal Name</Label>
                  <Input
                    value={meal.name}
                    onChange={(e) => {
                      const newMeals = [...heroContent.carousel_meals];
                      newMeals[idx].name = e.target.value;
                      const newContent = { ...heroContent, carousel_meals: newMeals };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                </div>
                <div>
                  <Label>Calories</Label>
                  <Input
                    value={meal.calories}
                    onChange={(e) => {
                      const newMeals = [...heroContent.carousel_meals];
                      newMeals[idx].calories = e.target.value;
                      const newContent = { ...heroContent, carousel_meals: newMeals };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                </div>
                <div>
                  <Label>Nutrition Tag</Label>
                  <Input
                    value={meal.nutrition}
                    onChange={(e) => {
                      const newMeals = [...heroContent.carousel_meals];
                      newMeals[idx].nutrition = e.target.value;
                      const newContent = { ...heroContent, carousel_meals: newMeals };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                </div>
                <div>
                  <Label>Image Filename</Label>
                  <Input
                    value={meal.image}
                    onChange={(e) => {
                      const newMeals = [...heroContent.carousel_meals];
                      newMeals[idx].image = e.target.value;
                      const newContent = { ...heroContent, carousel_meals: newMeals };
                      setEditingContent(JSON.stringify(newContent, null, 2));
                    }}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Images are stored in /src/assets/hero-meals/</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={() => handleSave(item.id)}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
          <Button variant="outline" onClick={() => setEditingId(null)}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Landing Page Content Manager</h1>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList>
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="all">All Sections</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4">
          {content.filter(item => item.section_type === 'hero').map(item => (
            <Card key={item.id} className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.section_key}</h3>
                    <p className="text-sm text-muted-foreground">Section Type: {item.section_type}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(item.id, item.is_active)}
                    >
                      {item.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {editingId === item.id ? (
                  renderHeroEditor(item)
                ) : (
                  <div>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      {JSON.stringify(item.content, null, 2)}
                    </pre>
                    <Button onClick={() => handleEdit(item)} className="mt-4">
                      Edit Content
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {content.map(item => (
            <Card key={item.id} className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.section_key}</h3>
                    <p className="text-sm text-muted-foreground">Type: {item.section_type}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(item.id, item.is_active)}
                    >
                      {item.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {editingId === item.id ? (
                  <div className="space-y-4">
                    <Textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      rows={15}
                      className="font-mono text-sm"
                    />
                    <div className="flex gap-4">
                      <Button onClick={() => handleSave(item.id)}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      {JSON.stringify(item.content, null, 2)}
                    </pre>
                    <Button onClick={() => handleEdit(item)} className="mt-4">
                      Edit Content
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandingPageManager;
