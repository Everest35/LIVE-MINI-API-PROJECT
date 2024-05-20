const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');
let previousQuote = null;

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    fetch('/api/quote')
        .then(response => response.json())
        .then(data => {
            if (data.text === previousQuote) {
                getQuote(); // Get a new quote if it's the same as the previous one
            } else {
                previousQuote = data.text;
                const quoteText = document.createElement('span');
                quoteText.textContent = data.text;
                const authorText = document.createElement('span');
                authorText.textContent = `— ${data.author}`;
                authorText.style.fontWeight = 'bold';
                quoteElement.innerHTML = '';
                quoteElement.appendChild(quoteText);
                quoteElement.appendChild(authorText);
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
}

// Initial quote fetch
getQuote();