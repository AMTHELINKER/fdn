const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const wordsFilePath = path.join(__dirname, '../src/data/words.json');

// GET - Récupérer tous les mots
app.get('/api/words', async (req, res) => {
  try {
    const data = await fs.readJson(wordsFilePath);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error reading words' });
  }
});

// POST - Sauvegarder/Mettre à jour les mots
app.post('/api/words', async (req, res) => {
  try {
    const newWords = req.body;
    await fs.writeJson(wordsFilePath, { words: newWords }, { spaces: 2 });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error saving words' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});