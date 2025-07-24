import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin, Heart, Gift, Sparkles, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message envoyé ! 💕",
      description: "Votre message d'anniversaire a été transmis avec succès.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Icons */}
        <Gift className="absolute top-20 right-10 h-6 w-6 text-primary/20 animate-bounce-gentle" />
        <Heart className="absolute top-1/3 left-20 h-8 w-8 text-secondary/20 animate-sparkle" />
        <Sparkles className="absolute bottom-1/3 right-1/4 h-5 w-5 text-accent/30 animate-float" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Envoyez-lui vos Vœux
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partagez vos messages d'anniversaire, vos souvenirs et vos vœux pour cette journée spéciale.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card shadow-festive">
              <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:contact@anniversaire.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  <a 
                    href="mailto:contact@anniversaire.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <span>Dieganefatima03@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.instagram.com/fatoumadn?igsh=MWZpbzZudDJsMm5vZg=="
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/fatoumadn?igsh=MWZpbzZudDJsMm5vZg=="
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <span>@fatoumadn</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href="https://wa.me/971562003132"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/971562003132"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <span>+971 56 200 3132</span>
                  </a>
                </div>
              </div>
            </Card>

            {/* Decorative Quote */}
            <Card className="p-8 bg-gradient-card shadow-festive text-center">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4 animate-sparkle" />
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Les anniversaires sont des nouveaux départs, des moments pour s'arrêter et apprécier tout ce qui a été accompli."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Citation d'anniversaire</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;