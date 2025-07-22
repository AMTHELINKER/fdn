import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Gift } from 'lucide-react';
import heroImage from '@/assets/hero-birthday.jpg';

const HeroSection = () => {
  const [age, setAge] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Date de naissance (à ajuster selon la personne)
    const birthDate = new Date('1990-03-15'); // Exemple
    
    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const days = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);
      
      setAge({ years, days, hours, minutes, seconds });
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fadeInUp">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 h-8 w-8 text-primary/30 animate-float" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-32 right-20 h-6 w-6 text-accent/40 animate-sparkle" style={{ animationDelay: '1s' }} />
        <Gift className="absolute bottom-32 left-20 h-10 w-10 text-secondary/30 animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-20 right-10 h-6 w-6 text-primary/20 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-festive bg-clip-text text-transparent animate-surprise">
            JOYEUX
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-surprise" style={{ animationDelay: '0.3s' }}>
            ANNIVERSAIRE
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Célébrons ensemble cette journée spéciale dédiée à une personne extraordinaire
          </p>

          {/* Age Counter */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-festive">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Elle vit depuis :</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="bg-primary/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">{age.years}</div>
                <div className="text-sm text-muted-foreground">Années</div>
              </div>
              <div className="bg-secondary/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-secondary-foreground">{age.days}</div>
                <div className="text-sm text-muted-foreground">Jours</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-accent-foreground">{age.hours}</div>
                <div className="text-sm text-muted-foreground">Heures</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">{age.minutes}</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="bg-secondary/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-secondary-foreground">{age.seconds}</div>
                <div className="text-sm text-muted-foreground">Secondes</div>
              </div>
            </div>
          </div>

          <Button size="lg" className="shadow-glow transition-bounce hover:scale-105">
            <Heart className="mr-2 h-5 w-5" />
            Découvrir son univers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;