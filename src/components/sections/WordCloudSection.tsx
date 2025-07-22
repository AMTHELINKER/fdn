import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Word {
  text: string;
  size: number;
  color: string;
  x: number;
  y: number;
}

const WordCloudSection = () => {
  const [userWord, setUserWord] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [words, setWords] = useState<Word[]>([]);

  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--secondary-foreground))',
    'hsl(var(--accent-foreground))',
    'hsl(var(--primary-glow))',
  ];

  const generateWordCloud = (newWord: string) => {
    const wordCount = words.filter(w => w.text.toLowerCase() === newWord.toLowerCase()).length + 1;
    const size = Math.min(16 + wordCount * 4, 48);
    
    // Position aléatoire mais évite les chevauchements
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    
    const wordObj: Word = {
      text: newWord,
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      x,
      y,
    };

    setWords(prev => [...prev, wordObj]);
  };

  const handleSubmit = () => {
    if (!userWord.trim()) return;
    
    generateWordCloud(userWord.trim());
    setHasSubmitted(true);
    
    toast({
      title: "Merci !",
      description: "Votre mot a été ajouté au nuage de mots.",
    });
    
    setUserWord('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Mots prédéfinis pour donner l'exemple
  useEffect(() => {
    const initialWords = ['généreuse', 'souriante', 'intelligente', 'drôle', 'bienveillante'];
    initialWords.forEach((word, index) => {
      setTimeout(() => {
        generateWordCloud(word);
      }, index * 500);
    });
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Qui est-elle ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Décrivez-la en un mot ! Votre contribution sera ajoutée au nuage de mots.
          </p>
          
          {/* Input Section */}
          <div className="flex gap-2 max-w-md mx-auto mb-8">
            <Input
              value={userWord}
              onChange={(e) => setUserWord(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre mot..."
              className="flex-1"
            />
            <Button onClick={handleSubmit} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Word Cloud Display */}
        {hasSubmitted && (
          <Card className="relative min-h-96 bg-gradient-card border-2 border-primary/20 shadow-festive overflow-hidden">
            <div className="absolute inset-0 p-8">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="absolute font-bold transition-all duration-500 hover:scale-110 cursor-pointer animate-fadeInUp"
                  style={{
                    left: `${word.x}%`,
                    top: `${word.y}%`,
                    fontSize: `${word.size}px`,
                    color: word.color,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {word.text}
                </span>
              ))}
            </div>
            
            {words.length === 0 && (
              <div className="flex items-center justify-center h-96 text-muted-foreground">
                Ajoutez votre premier mot pour voir le nuage se former !
              </div>
            )}
          </Card>
        )}

        {!hasSubmitted && (
          <Card className="p-8 text-center bg-gradient-card border-2 border-dashed border-primary/30">
            <p className="text-muted-foreground">
              Ajoutez votre mot pour révéler le nuage de mots magique ! ✨
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default WordCloudSection;