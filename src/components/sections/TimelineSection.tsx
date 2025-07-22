import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Heart, Trophy, Briefcase, GraduationCap } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Nouvelle Aventure',
      description: 'Lance son propre projet entrepreneurial avec passion et détermination.',
      icon: Briefcase,
      color: 'primary'
    },
    {
      year: '2023',
      title: 'Voyage Mémorable',
      description: 'Découverte de nouveaux horizons et cultures lors d\'un voyage enrichissant.',
      icon: Heart,
      color: 'secondary'
    },
    {
      year: '2022',
      title: 'Diplôme Obtenu',
      description: 'Obtention de son diplôme avec mention, couronnant des années d\'efforts.',
      icon: GraduationCap,
      color: 'accent'
    },
    {
      year: '2021',
      title: 'Reconnaissance Professionnelle',
      description: 'Récompensée pour son excellence et son dévouement dans son domaine.',
      icon: Trophy,
      color: 'primary'
    },
    {
      year: '2020',
      title: 'Projet Communautaire',
      description: 'Initiative bénévole qui a marqué positivement sa communauté locale.',
      icon: Star,
      color: 'secondary'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Son Parcours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retracez les moments clés qui ont façonné sa personnalité exceptionnelle.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content Card */}
                  <Card className={`flex-1 p-6 bg-gradient-card shadow-festive ${isEven ? 'mr-4' : 'ml-4'}`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {event.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Center Circle */}
                  <div className="relative z-10 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow animate-sparkle"></div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <Card className="mt-16 p-8 bg-gradient-card shadow-festive text-center">
          <Star className="h-12 w-12 text-primary mx-auto mb-4 animate-sparkle" />
          <h3 className="text-2xl font-bold mb-4">Et ce n'est que le début !</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Avec sa détermination et sa passion, elle continuera à écrire de belles pages 
            de son histoire et à inspirer tous ceux qui l'entourent.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TimelineSection;