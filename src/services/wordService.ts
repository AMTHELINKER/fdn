import { WordData } from '@/types/word';

const API_URL = 'https://fdn-o1x5.onrender.com/api';

export const saveWords = async (words: WordData[]) => {
  try {
    // Sauvegarde locale
    localStorage.setItem('cloudWords', JSON.stringify(words));
    
    // Sauvegarde sur le serveur
    await fetch(`${API_URL}/words`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(words),
    });
    
    return true;
  } catch (error) {
    console.error('Error saving words:', error);
    return false;
  }
};

export const loadWords = async (): Promise<WordData[]> => {
  try {
    // Charger depuis le serveur
    const response = await fetch(`${API_URL}/words`);
    const data = await response.json();
    
    // Mettre à jour le stockage local
    localStorage.setItem('cloudWords', JSON.stringify(data.words));
    
    return data.words;
  } catch (error) {
    // Fallback sur le stockage local
    console.error('Error loading words from server:', error);
    const savedWords = localStorage.getItem('cloudWords');
    return savedWords ? JSON.parse(savedWords) : [];
  }
};
