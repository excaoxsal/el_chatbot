const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors'); //
app.use(cors({
  origin: ['http://localhost', 'http://127.0.0.1']
}));

app.use(express.json());


const elresponse = JSON.parse(fs.readFileSync('backend/response.json')).elresponse;

app.post('/chat', (req, res) => {
  const question = req.body.question.toLowerCase();
  let answer = "Sorry, I don't understand that question.";

  
  for (const [key, value] of Object.entries(elresponse)) {
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