import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Smile, Zap, Play } from 'lucide-react';

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
      
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Who's Diegane ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez la personnalité exceptionnelle qui nous réunit aujourd'hui pour célébrer son anniversaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          

          {/* Description Card */}
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">TAARU</h3>
            <div className="space-y-4 text-muted-foreground">
              <img src="/images/korite.jpeg" alt="Portrait" />
            </div>
          </Card>
          {/* Qualities Card */}

          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">SOURIANTE</h3>
            <div className="">
             <img src="/images/diegs2.jpeg" alt="" />
            </div>
          </Card>
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">DIEKK</h3>
            <div className="">
             <img src="/images/diegs1.jpeg" alt="" />
            </div>
          </Card>
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 text-center">Meun aligner</h3>
            <div className="">
             <img src="/images/aligner.jpeg" alt="" />
            </div>
          </Card>
          <Card className="p-8 bg-gradient-card shadow-festive">
          <h3 className="text-2xl font-bold mb-6 text-center">PRIIIIME</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <video className="w-full h-full object-cover"
            controls
            playsInline>
              <source src="/videos/vid6.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </Card>
      

        
        {/* Achievements */}
        
      </div>
    </section>
  );
};

export default AboutSection;