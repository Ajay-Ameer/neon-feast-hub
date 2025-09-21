import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AdminService, MediaItem } from '@/services/adminService';
import { Upload, Search, Filter, Trash2, Download, Eye } from 'lucide-react';
import { toast } from 'sonner';

export function MediaManager() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      setLoading(true);
      const data = await AdminService.getMediaLibrary();
      setMediaItems(data);
    } catch (error) {
      console.error('Error loading media:', error);
      toast.error('Failed to load media library');
    } finally {
      setLoading(false);
    }
  };

  const filteredMedia = mediaItems.filter(item =>
    item.original_filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.alt_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    try {
      for (const file of Array.from(files)) {
        await AdminService.uploadMedia(file, {
          alt_text: file.name.split('.')[0],
          tags: []
        });
      }
      toast.success('Files uploaded successfully');
      loadMedia();
      setIsUploadDialogOpen(false);
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Failed to upload files');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileTypeIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎥';
    if (mimeType.startsWith('audio/')) return '🎵';
    if (mimeType.includes('pdf')) return '📄';
    return '📁';
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
          <h2 className="text-2xl font-bold">Media Library</h2>
          <p className="text-muted-foreground">Manage all your media files and assets</p>
        </div>
        <Button onClick={() => setIsUploadDialogOpen(true)}>
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Media Files</CardTitle>
              <CardDescription>
                {mediaItems.length} files • {formatFileSize(mediaItems.reduce((acc, item) => acc + item.file_size, 0))} total
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search media..."
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="group relative border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedMedia(item)}
              >
                {item.mime_type.startsWith('image/') ? (
                  <div className="aspect-square bg-muted">
                    <img
                      src={item.url}
                      alt={item.alt_text || item.original_filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <span className="text-4xl">{getFileTypeIcon(item.mime_type)}</span>
                  </div>
                )}
                
                <div className="p-2">
                  <p className="text-xs font-medium truncate">{item.original_filename}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(item.file_size)}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="destructive" className="h-6 w-6 p-0">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Media Files</DialogTitle>
            <DialogDescription>
              Select files to upload to your media library
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Choose Files</Label>
              <Input
                id="file-upload"
                type="file"
                multiple
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="mt-1"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Supported formats: Images, Videos, Audio, PDF, Documents
              <br />
              Maximum file size: 10MB per file
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-3xl">
          {selectedMedia && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedMedia.original_filename}</DialogTitle>
                <DialogDescription>
                  {selectedMedia.mime_type} • {formatFileSize(selectedMedia.file_size)} • 
                  Uploaded {new Date(selectedMedia.created_at).toLocaleDateString()}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {selectedMedia.mime_type.startsWith('image/') && (
                  <div className="max-h-96 overflow-hidden rounded-lg">
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.alt_text || selectedMedia.original_filename}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Alt Text</Label>
                    <Input
                      value={selectedMedia.alt_text || ''}
                      placeholder="Add alt text for accessibility"
                    />
                  </div>
                  <div>
                    <Label>Caption</Label>
                    <Input
                      value={selectedMedia.caption || ''}
                      placeholder="Add a caption"
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Tags</Label>
                  <Input
                    value={selectedMedia.tags.join(', ')}
                    placeholder="Add tags (comma separated)"
                  />
                </div>
                
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline">
                      Copy URL
                    </Button>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}