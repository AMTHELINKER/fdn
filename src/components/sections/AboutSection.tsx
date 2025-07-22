import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Smile, Zap } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    { icon: Heart, text: 'Généreuse', color: 'bg-primary/10 text-primary' },
    { icon: Star, text: 'Brillante', color: 'bg-secondary/10 text-secondary-foreground' },
    { icon: Smile, text: 'Joyeuse', color: 'bg-accent/10 text-accent-foreground' },
    { icon: Zap, text: 'Énergique', color: 'bg-primary/10 text-primary' },
  ];

  const achievements = [
    'Diplômée avec mention',
    'Entrepreneure passionnée',
    'Mentor pour jeunes talents',
    'Voyageuse infatigable',
    'Amatrice de cuisine',
    'Sportive accomplie'
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            À Propos d'Elle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez la personnalité exceptionnelle qui nous réunit aujourd'hui pour célébrer son anniversaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Qualities Card */}
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">Ses Qualités</h3>
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => {
                const IconComponent = quality.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span className="font-medium">{quality.text}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Description Card */}
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">Son Portrait</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Une personne d'exception qui illumine la vie de tous ceux qui l'entourent. 
                Sa générosité et sa bienveillance sont légendaires.
              </p>
              <p>
                Toujours prête à aider, elle trouve le temps pour tout le monde malgré 
                un emploi du temps chargé. Son sourire est contagieux !
              </p>
              <p>
                Passionnée et déterminée, elle poursuit ses rêves avec une énergie 
                inspirante qui motive son entourage à donner le meilleur de lui-même.
              </p>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="p-8 bg-gradient-card shadow-festive">
          <h3 className="text-2xl font-bold mb-6 text-center">Ses Accomplissements</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {achievements.map((achievement, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-smooth animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {achievement}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;