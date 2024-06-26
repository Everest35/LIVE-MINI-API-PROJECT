const express = require('express');
const quotes = require('./quotes');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html, script.js, style.css)
app.use(express.static('public'));

// API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.quotes.length);
    const randomQuote = quotes.quotes[randomIndex];
    res.json({ text: randomQuote.text, author: randomQuote.author });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});