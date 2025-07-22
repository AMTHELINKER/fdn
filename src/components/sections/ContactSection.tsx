import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin, Heart, Gift, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-festive">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Votre Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Votre nom</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Comment vous appelez-vous ?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Votre email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Votre message d'anniversaire</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez ici vos vœux, vos souvenirs ou simplement ce que vous aimeriez lui dire..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full shadow-glow transition-bounce hover:scale-105">
                <Send className="mr-2 h-5 w-5" />
                Envoyer mes Vœux d'Anniversaire
              </Button>
            </form>
          </Card>

          {/* Contact Info & Decoration */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8 bg-gradient-card shadow-festive">
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@anniversaire.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Paris, France</span>
                </div>
              </div>
            </Card>

            {/* Birthday Stats */}
            <Card className="p-8 bg-gradient-card shadow-festive text-center">
              <h3 className="text-2xl font-bold mb-6">Statistiques de Fête</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Sourires partagés</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-secondary-foreground mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">De bonheur</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent-foreground mb-2">365</div>
                  <div className="text-sm text-muted-foreground">Jours de joie</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Personne unique</div>
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