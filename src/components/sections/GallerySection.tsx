import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, MapPin, Calendar, Play, Image as ImageIcon, Star, Smile, PartyPopperIcon } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Elle');

  // Media items avec images et vidéos
  const mediaItems = [
    {
      id: 0,
      title: 'Petite avec sa maman',
      category: 'Elle',
      type: 'image',
      description: 'Ownn c\'est chou 🥺🥺🥺',
      url: '/images/Withmum.jpeg',
    },
    {
      id: 1,
      title: '💃🏾💃🏾💃🏾',
      category: 'Elle',
      type: 'image',
      description: 'Petit pas de dance',
      url: '/images/bb1.jpeg',
    },
    {
      id: 2,
      title: 'Lunettes teintées',
      category: 'Elle',
      type: 'image',
      description: 'Phares xénon, vitres teintées (Bendo Bendo)',
      url: '/images/bb2.jpeg',
    },
    {
      id: 3,
      title: '😊😊😊',
      category: 'Elle',
      type: 'image',
      description: '',
      url: '/images/bb3.jpeg',
    },
    {
      id: 4,
      title: 'Pose modeste',
      category: 'Elle',
      type: 'image',
      description: ' mais elle sait où t’étais le 14 mars 2019 à 15h42.',
      url: '/images/bb4.jpeg',
    },
    {
      id: 5,
      title: 'Waouh',
      category: 'Elle',
      type: 'image',
      description: 'T\'aimes trop le luxe !!!',
      url: '/images/diegs1.jpeg',
    },
    {
      id: 6,
      title: 'They are twins ?',
      category: 'friends',
      type: 'image',
      description: 'Maybe...',
      url: '/images/Withdad.jpeg',
    },
    {
      id: 7,
      title: 'The Smile',
      category: 'friends',
      type: 'image',
      description: 'Always smiling with her mum',
      url: '/images/Withmum2.jpeg',
    },
    {
      id: 8,
      type: 'video',
      title: 'Aléa beurengou',
      category: 'friends',
      description: 'Nitou milieu',
      url: '/videos/vid1.mp4', // Notez le chemin modifié
      thumbnail: '/images/thumbnails/vid1.jpg', // Optionnel: ajoutez une miniature
    },
    {
      id: 9,
      title: 'SK Touch',
      category: 'Elle',
      description: 'Modele a ses heures perdues',
      url: '/images/diegsXtouch.jpeg',
    },
    {
      id: 10,
      title: 'Birthday Celebration',
      type: 'video',
      category: 'celebrations',
      description: 'Une fête mémorable',
      url: '/videos/Birthday.mp4',
    },
    {
      id: 11,
      title: 'Fête de Korite',
      category: 'celebrations',
      type: 'image',
      description: 'Looking like 10/10 + 10 Minus nothing Add everything',
      url: '/images/korite.jpeg',
    },
    {
      id: 12,
      title: 'Birthday Celebration',
      type: 'video',
      category: 'celebrations',
      description: 'Une fête mémorable',
      url: '/videos/fete.mp4',
    },
    {
      id: 13,
      title: 'Mijudicious',
      category: 'friends',
      type: 'image',
      description: 'MTL babes',
      url: '/images/WithSoda.jpeg',
    },
    {
      id: 14,
      title: 'BGs',
      category: 'friends',
      type: 'image',
      description: 'Blood Gang',
      url: '/images/Withbro.jpeg',
    },
    {
      id: 15,
      title: 'Fatouma',
      category: 'friends',
      type: 'image',
      description: 'bou Ousmane',
      url: '/images/boy.jpeg',
    },
    {
      id: 16,
      title: 'AFA',
      category: 'friends',
      type: 'image',
      description: 'Trio magique',
      url: '/images/Friends2.jpeg',
    },
    {
      id: 17,
      title: 'Supernova',
      category: 'friends',
      type: 'image',
      description: 'You already know the vibes',
      url: '/images/Friends.jpeg',
    },
    {
      id: 18,
      title: 'Encore Supernova',
      category: 'friends',
      type: 'image',
      description: 'You already know the vibes',
      url: '/images/Friends3.jpeg',
    },
    {
      id: 19,
      title: 'Encore Supernova',
      category: 'friends',
      type: 'image',
      description: 'You already know the vibes',
      url: '/images/Friends4.jpeg',
    },
    {
      id: 20,
      title: 'Encore Supernova',
      type: 'video',
      category: 'friends',
      description: '🤣',
      url: '/videos/WithAdji.mp4',
    },
    {
      id: 21,
      title: 'Zemberei',
      category: 'friends',
      type: 'image',
      description: 'No caption needed',
      url: '/images/b1.jpeg',
    }
  ];

  const categories = [
    { id: 'Elle', label: 'Elle', icon: Camera },
    { id: 'friends', label: 'Friends & Family', icon: Smile },
    { id: 'celebrations', label: 'Fêtes', icon: PartyPopperIcon }
  ];

  const filteredMedia = selectedCategory === 'Elle'
    ? mediaItems.filter(item => item.category === selectedCategory)
    : selectedCategory === 'images'
    ? mediaItems.filter(item => item.type === 'image')
    : selectedCategory === 'videos'
    ? mediaItems.filter(item => item.type === 'video')
    : mediaItems.filter(item => item.category === selectedCategory);

  const renderMediaContent = (item: any, index: number) => {
    if (item.type === 'video') {
      return (
        <div className="relative aspect-video overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={item.url} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:opacity-0 transition-opacity pointer-events-none">
            <Play className="h-12 w-12 text-white" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading={index < 6 ? "eager" : "lazy"}
        />
      </div>
    );
  };

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

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <Card 
              key={item.id}
              className="overflow-hidden bg-gradient-card shadow-festive hover:shadow-glow transition-smooth group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {renderMediaContent(item, index)}
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.type === 'video' ? 'Vidéo' : 'Photo'}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {item.description}
                </p>
                
                
              </div>
            </Card>
          ))}
        </div>

        {filteredMedia.length === 0 && (
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