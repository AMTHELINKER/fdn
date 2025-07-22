import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, MapPin, Calendar } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Photos simulées - à remplacer par de vraies photos
  const photos = [
    {
      id: 1,
      title: 'Voyage en montagne',
      category: 'voyages',
      location: 'Alpes françaises',
      date: '2023',
      description: 'Une aventure inoubliable en haute montagne',
    },
    {
      id: 2,
      title: 'Soirée entre amis',
      category: 'amis',
      location: 'Paris',
      date: '2023',
      description: 'Moments précieux partagés',
    },
    {
      id: 3,
      title: 'Remise de diplôme',
      category: 'accomplissements',
      location: 'Université',
      date: '2022',
      description: 'Un moment de fierté bien mérité',
    },
    {
      id: 4,
      title: 'Randonnée au coucher du soleil',
      category: 'voyages',
      location: 'Provence',
      date: '2023',
      description: 'La beauté de la nature à son apogée',
    },
    {
      id: 5,
      title: 'Fête surprise',
      category: 'celebrations',
      location: 'Maison',
      date: '2023',
      description: 'Une surprise organisée avec amour',
    },
    {
      id: 6,
      title: 'Marathon de la ville',
      category: 'accomplissements',
      location: 'Lyon',
      date: '2023',
      description: 'Défi personnel relevé avec brio',
    }
  ];

  const categories = [
    { id: 'all', label: 'Tout', icon: Camera },
    { id: 'voyages', label: 'Voyages', icon: MapPin },
    { id: 'amis', label: 'Amis', icon: Heart },
    { id: 'accomplissements', label: 'Réussites', icon: Calendar },
    { id: 'celebrations', label: 'Fêtes', icon: Heart }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Camera className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Galerie de Souvenirs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une collection de moments précieux qui racontent son histoire et ses aventures.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="overflow-hidden bg-gradient-card shadow-festive hover:shadow-glow transition-smooth group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-festive/20 flex items-center justify-center group-hover:scale-105 transition-smooth">
                <Camera className="h-16 w-16 text-primary/30" />
              </div>
              
              {/* Photo Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{photo.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {photo.date}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {photo.description}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {photo.location}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Aucune photo dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;