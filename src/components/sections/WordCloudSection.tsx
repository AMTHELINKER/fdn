import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import wordData from '@/data/words.json';
import { WordData, WordDisplay } from '@/types/word';
import { saveWords, loadWords } from '@/services/wordService';

const WordCloudSection = () => {
  const [userWord, setUserWord] = useState('');
  const [words, setWords] = useState<WordDisplay[]>([]);
  const [wordDatabase, setWordDatabase] = useState<WordData[]>(wordData.words);

  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--secondary-foreground))',
    'hsl(var(--accent-foreground))',
    'hsl(var(--primary-glow))',
  ];

  // Fonction pour vérifier les collisions
  const checkCollision = (word1: WordDisplay, word2: WordDisplay) => {
    const padding = 20; // Espace minimum entre les mots
    const rect1 = {
      left: word1.x - (word1.size * word1.text.length) / 4,
      right: word1.x + (word1.size * word1.text.length) / 4,
      top: word1.y - word1.size,
      bottom: word1.y + word1.size
    };
    const rect2 = {
      left: word2.x - (word2.size * word2.text.length) / 4,
      right: word2.x + (word2.size * word2.text.length) / 4,
      top: word2.y - word2.size,
      bottom: word2.y + word2.size
    };

    return !(rect1.right + padding < rect2.left - padding ||
             rect1.left - padding > rect2.right + padding ||
             rect1.bottom + padding < rect2.top - padding ||
             rect1.top - padding > rect2.bottom + padding);
  };

  // Fonction modifiée pour générer une position sans collision
  const generateWordDisplay = (word: WordData, existingWords: WordDisplay[]): WordDisplay => {
    const baseSize = window.innerWidth < 640 ? 14 : 18;
    const maxSize = window.innerWidth < 640 ? 36 : 52;
    const size = Math.min(baseSize + word.count * 4, maxSize);
    
    let attempts = 0;
    let newWord: WordDisplay;
    
    do {
      const margin = window.innerWidth < 640 ? 15 : 20;
      const x = Math.random() * (100 - 2 * margin) + margin;
      const y = Math.random() * (100 - 2 * margin) + margin;
      
      newWord = {
        ...word,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        x,
        y,
      };

      // Vérifier les collisions avec les mots existants
      const hasCollision = existingWords.some(existingWord => 
        checkCollision(newWord, existingWord)
      );

      if (!hasCollision) break;
      attempts++;
    } while (attempts < 50); // Limite le nombre de tentatives

    return newWord;
  };

  const updateWordsDisplay = (words: WordData[]) => {
    const displayWords: WordDisplay[] = [];
    
    words.forEach(word => {
      const displayWord = generateWordDisplay(word, displayWords);
      displayWords.push(displayWord);
    });

    setWords(displayWords);
  };

  const handleSubmit = () => {
    if (!userWord.trim()) return;
    
    const newWord = userWord.trim();
    let updatedDatabase = [...wordDatabase];
    
    const existingWord = updatedDatabase.find(w => 
      w.text.toLowerCase() === newWord.toLowerCase()
    );
    
    if (existingWord) {
      updatedDatabase = updatedDatabase.map(w => 
        w.text.toLowerCase() === newWord.toLowerCase()
          ? { ...w, count: w.count + 1 }
          : w
      );
    } else {
      const newWordData: WordData = {
        text: newWord,
        count: 1,
        timestamp: new Date().toISOString()
      };
      updatedDatabase = [...updatedDatabase, newWordData];
    }

    setWordDatabase(updatedDatabase);
    saveWords(updatedDatabase); // Sauvegarde dans le localStorage
    updateWordsDisplay(updatedDatabase);
    
    toast({
      title: "Merci !",
      description: "Votre mot a été ajouté au nuage de mots.",
    });
    
    setUserWord('');
  };

  useEffect(() => {
    // Charger les mots sauvegardés au démarrage
    const savedWords = loadWords();
    if (savedWords.length > 0) {
      setWordDatabase(savedWords);
      updateWordsDisplay(savedWords);
    }
  }, []);

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <MessageCircle className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4 animate-bounce-gentle" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-festive bg-clip-text text-transparent">
            Comment est-elle ?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Ajoutez votre mot au nuage collectif !
          </p>
          
          <div className="flex gap-2 max-w-[280px] sm:max-w-md mx-auto mb-6 sm:mb-8">
            <Input
              value={userWord}
              onChange={(e) => setUserWord(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Tapez votre mot..."
              className="flex-1"
            />
            <Button onClick={handleSubmit} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="relative min-h-[300px] sm:min-h-96 bg-gradient-card border-2 border-primary/20 shadow-festive overflow-hidden">
          <div className="absolute inset-0 p-4 sm:p-8">
            {words.map((word, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 cursor-pointer"
                style={{
                  left: `${word.x}%`,
                  top: `${word.y}%`,
                }}
              >
                <div
                  className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 shadow-lg"
                  style={{
                    fontSize: `${word.size}px`,
                    color: word.color,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {word.text}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WordCloudSection;