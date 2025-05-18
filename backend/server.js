const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors'); //
app.use(cors({
  origin: ['http://localhost', 'http://127.0.0.1'] // Izinkan dari origin ini
}));

app.use(express.json());

// Load predefined responses
const responses = JSON.parse(fs.readFileSync('backend/response.json')).responses;

app.post('/chat', (req, res) => {
  const question = req.body.question.toLowerCase();
  let answer = "Sorry, I don't understand that question.";

  // Cari jawaban yang cocok
  for (const [key, value] of Object.entries(responses)) {
    if (question.includes(key)) {
      answer = value;
      break;
    }
  }

  res.json({ answer });
});



app.listen(PORT, () => {
  console.log(`Chatbot server running on http://localhost:${PORT}`);
});