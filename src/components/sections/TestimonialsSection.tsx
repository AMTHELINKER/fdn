import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Heart, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Soda',
      content: `Happiest of birthdays to my sister since day one, my rock, my partner, mi judicious! Words can’t sum up how much you mean to me. You are one of the most important people in my life! We know each other for a while and you remained the same! Dara moussoul niaw souniou diguentei et mangi niane YAllah que boumou meussa niaw! You have been a support, a shoulder to lean on, a very good and loyal friend! On a littéralement fait les 400 coups ensemble, bêtises bou neik nioko deifando, nos parents en pls🤣🤣  
      And I hope we gonna make many more memories together, many more laughter times, many more fattt!!!! Je te souhaite tout ce que je souhaite à ma propre personne and even more!! I’m so proud of the young women you are becoming and I wish you nothing but full joy, love, success in your life! You always spread love joy and positivity anywhere you go, you’re like the one that lighten our lives.  
      I will always be here for you no matter what! I love you to the moon passant par Venus and never back mijudicious💌`,
      avatar: 'S'
    },
    {
      name: 'Ousmane',
      content: `Talking about you not an easy task, I don’t even know where to start. Our story starts with a « dieulma wala meu dieul leu » 😂 back then, I had no idea how deeply you’d impact my life. Now I look at you and I see my peace, my joy, and my greatest blessing.  
      Choosing you was the best decision I’ve ever made and I’m thankful every day that you chose me too. You’ve shown me what real love feels like not just through words, but through your actions, your presence and your heart. You helped me grow and become a better version of myself. You’ve brought so much light into my life, you make me feel seen, loved, and inspired.  
      Because of you, I believe in love, not just the idea of it, but the kind that lasts, the kind we build together every day.  
      When I try to put into words why I love you, it’s a challenge not because it’s unclear but there are lot of reasons. But today I want to focus on one thing.  
      Your kindness that stands out, it’s in the way you treat people with patience, even when they don’t deserve it. In the way you notice when someone’s hurting and gently make space for them. You give so much of yourself and yet never expect anything in return.  
      Fatouma, you make the world a better place simply by being in it. And I want you to know this: I’m so proud of you. Proud of the woman you are, everything you’ve overcome, and the way you carry yourself.  
      No matter what happens, no matter where life takes us, you can always count on me. Emotionally, mentally, and in every way you need, I’ll be by your side. Happy Birthday My love ❤️`,
      avatar: 'O',
    },
    {
      name: 'Kya',
      content: `Il y a des personnes qu’on croise et qui marquent nos vies à jamais. ✨
      Diegs du binks en fait clairement partie. Elle est ce genre de personne qui ne recule devant rien pour ses proches 💪🏾, toujours la première à soutenir les projets 💼, toujours là quand on a besoin d’elle 🤝, sans rien attendre en retour.

      Je n’oublierai jamais le jour où elle a annulé le travail juste pour venir à mon shooting 📸. Et ce n’était pas juste une présence symbolique. Elle s’est investie de tout son cœur ❤️, comme si c’était son propre projet. Ce geste, aussi simple qu’il puisse paraître, est révélateur de qui elle est : une femme loyale, dévouée et profondément aimante 💖.

      Mais ce n’est pas tout. Elle est aussi incroyablement drôle 🤣.
      Avec elle, on ne manque jamais de rire 😂. Sa bonne énergie est contagieuse ⚡. Elle illumine les pièces par sa seule présence 🌟, et son humour rend les moments ordinaires mémorables 🎉.

      Qu’Allah lui rende au centuple tout le bien qu’elle fait autour d’elle 🤲🏾.
      Qu’Il lui accorde la santé 🧘🏾‍♀️, l’amour 💞, la prospérité 💰, et qu’Il bénisse chacun de ses pas 👣.
      Qu’Il lui accorde la réussite ici-bas et dans l’au-delà 🌍🕊️.
      ❤️❤️❤️`,
      avatar: 'KS'
    },
    {
      name: 'Aminata SENGHOR',
      content: `She’s one of those people who make life feel lighter. Always there for us and loving without thinking.  
      I’m so proud of the woman you’re becoming and of everything you’ve achieved so far.  
      J’espère que cette journée d’anniversaire te rappelle à quel point tu es aimée et à quel point tu comptes pour nous.  
      To many more life, more wins and more ootds. Happy birthday choupisson🤍`,
      avatar: 'AS'
    },
    {
      name: 'Adji NDIAYE',
      content: `🎉 Happy birthday love 🎂✨ Another year of you being amazing 💗  
      I am so thankful for every moment we shared . Merci d’être celle que tu es . Merci pour ta présence, ton énergie , et tout l’amour que tu donnes sans compter.  
      May your days be filled with joy, laughter, and endless love. Que cette nouvelle année t’apporte réussite, santé, et plein de beaux moments.  
      I hope all your dreams come true and that life surprises you in the best ways. Never forget how loved you are 💗 Enjoy your day baby girl!!`,
      avatar: 'AN',
    },
    {
      name: 'Fatou MARE',
      content: `Joyful. Warm. Full of life.  
      The kind of person who brings energy just by entering a room.  
      Diegane is one of those unforgettable friends. the ones you carry with you no matter where life takes you. And honestly, I’m still thanking life for uniting me with such soulful girls here in Canada… her included.  
      Even at 80, I know I’ll remember her laugh. I’ll remember our wild, athletic dances.  
      I’ll remember how genuinely happy we were in our early twenties: singing, dancing, laughing like nothing else mattered.  
      As long as life leaves me with memory, I’ll remember !  
      Thank you, Diegane, for those moments I carry and will always carry.  
      You’ve got a part of my heart. Of my admiration. And of my respect.  
      Aujourd’hui, alors qu’elle entame un nouveau chapitre, loin de ceux qui l’ont vue vivre, aimer, rire, grandir, je ne m’inquiète pas.  
      Elle saura se faire aimer là-bas, comme ici.  
      Parce que son cœur est vaste. Parce qu’elle est d’une energie, d’une generosite et d’une bonte hors pair.  
      Joyeux anniversaire, Honeybee.  
      Que la vie, partout où elle t’emmène, te donne au centuple ce que tu offres sans compter.`,
      avatar: 'AB'
    },
    { 
      name: 'Coumba',
      content: `Happy birthday Diegsss.  
      Je te souhaite le meilleur en cette nouvelle année de ta vie : une santé de fer, de belles réussites dans tous tes projets, yallah taxawoula si lepp loy doug in sha Allah!  
      Que ta joie de vivre ne te quitte jamais et que tu continues de la propager partout où tu iras !  
      Que cette 22e année soit remplie de paix, de réussites, de rires et de moments remplis de joie.  
      Keep shining! Longue vie à nousss`,
      avatar: 'C'
    },
    {
      name: 'Papa & Maman',
      content: `Tu as bien grandi et tu es restée la même : gentille, douce, paisible, souriante, disponible, bienveillante et adoraaaaaaaaable.  
      Nous t’aimons très fort et te souhaitons un très joyeux anniversaire`,
      avatar: 'PM'
    },
    {
      name: 'Bamba',
      content: `Happy Birthday my dear sister, you are the best sister on this planet!  
      Yallah nala Yallah sammeu, et t’accompagnes dans tous tes projets…  
      We love you so much ❤️❤️❤️❤️.  
      Dila nianal goudd fane, wergou yaram, Bcp d’argent et de la reussite dans les etudes/projets`,
      avatar: 'B'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Quelques mots de ses proches
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