const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    fetch('/api/quote')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = data.quote;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
}

// Initial quote fetch
getQuote();
