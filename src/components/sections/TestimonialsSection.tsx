import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Heart, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marie L.',
      role: 'Meilleure amie',
      content: 'Une personne en or ! Toujours là pour écouter et conseiller. Sa générosité n\'a pas de limite.',
      avatar: 'ML',
      rating: 5
    },
    {
      name: 'Pierre D.',
      role: 'Collègue',
      content: 'Travailler avec elle est un plaisir. Son professionnalisme et sa bonne humeur sont contagieux.',
      avatar: 'PD',
      rating: 5
    },
    {
      name: 'Sophie M.',
      role: 'Sœur',
      content: 'Ma sœur est ma source d\'inspiration quotidienne. Elle me montre que tout est possible.',
      avatar: 'SM',
      rating: 5
    },
    {
      name: 'Thomas R.',
      role: 'Mentor',
      content: 'Une élève brillante devenue une professionnelle remarquable. Je suis fier de son parcours.',
      avatar: 'TR',
      rating: 5
    },
    {
      name: 'Julie K.',
      role: 'Voisine',
      content: 'Toujours prête à rendre service avec le sourire. Notre quartier a de la chance de l\'avoir.',
      avatar: 'JK',
      rating: 5
    },
    {
      name: 'Alexandre B.',
      role: 'Ami d\'enfance',
      content: 'Depuis 20 ans, elle n\'a pas changé : toujours aussi drôle, loyale et attachante.',
      avatar: 'AB',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Ce qu'ils disent d'elle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les témoignages de ceux qui la connaissent le mieux parlent d'eux-mêmes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-festive hover:shadow-glow transition-smooth animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-primary text-primary animate-sparkle"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-card shadow-festive text-center">
          <h3 className="text-2xl font-bold mb-4">Vous aussi, laissez un message !</h3>
          <p className="text-muted-foreground mb-6">
            Partagez vos souvenirs et vos vœux dans la section contact ci-dessous.
          </p>
          <div className="flex justify-center gap-2">
            <Heart className="h-5 w-5 text-primary animate-sparkle" />
            <Heart className="h-5 w-5 text-secondary-foreground animate-sparkle" style={{ animationDelay: '0.2s' }} />
            <Heart className="h-5 w-5 text-accent-foreground animate-sparkle" style={{ animationDelay: '0.4s' }} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;