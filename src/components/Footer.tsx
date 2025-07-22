import { Heart, Star, Gift, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-festive text-white py-16 overflow-hidden">
      {/* Animated Birthday Cake */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="animate-bounce-gentle">
          {/* Cake Base */}
          <div className="relative">
            {/* Cake Layers */}
            <div className="w-32 h-16 bg-secondary rounded-lg mb-2 relative">
              <div className="w-28 h-12 bg-accent rounded-lg absolute top-1 left-2"></div>
            </div>
            <div className="w-36 h-20 bg-primary rounded-lg relative">
              <div className="w-32 h-16 bg-primary-glow rounded-lg absolute top-1 left-2"></div>
            </div>
            
            {/* Candles */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-1 h-6 bg-yellow-200"></div>
                  <div 
                    className="w-2 h-3 bg-orange-400 rounded-full animate-sparkle" 
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="h-8 w-8 animate-sparkle" />
            <h3 className="text-3xl font-bold">Joyeux Anniversaire !</h3>
            <Heart className="h-8 w-8 animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Que cette nouvelle année soit remplie de bonheur, de réussites et de moments inoubliables. 
            Tu mérites tout le bonheur du monde ! 🎉
          </p>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-white/30"></div>
            <Star className="h-6 w-6 animate-sparkle" />
            <div className="w-16 h-0.5 bg-white/30"></div>
            <Gift className="h-6 w-6 animate-bounce-gentle" />
            <div className="w-16 h-0.5 bg-white/30"></div>
            <Sparkles className="h-6 w-6 animate-sparkle" style={{ animationDelay: '1s' }} />
            <div className="w-16 h-0.5 bg-white/30"></div>
          </div>

          {/* Birthday Wishes */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
              <h4 className="text-lg font-semibold mb-2">Amour</h4>
              <p className="text-white/80 text-sm">
                Que l'amour de tes proches t'accompagne chaque jour
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 animate-sparkle" />
              <h4 className="text-lg font-semibold mb-2">Succès</h4>
              <p className="text-white/80 text-sm">
                Que tous tes projets se réalisent avec brio
              </p>
            </div>
            <div className="text-center">
              <Gift className="h-12 w-12 mx-auto mb-4 animate-float" />
              <h4 className="text-lg font-semibold mb-2">Joie</h4>
              <p className="text-white/80 text-sm">
                Que chaque jour t'apporte sa dose de bonheur
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 mb-4">
            Site créé avec 💕 pour célébrer une personne exceptionnelle
          </p>
          <p className="text-white/50 text-sm">
            © 2024 - Joyeux Anniversaire - Tous les souvenirs sont précieux
          </p>
          
          {/* Final Decorative Touch */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                className="h-4 w-4 text-white/30 animate-sparkle" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;