import { useEffect, useState } from 'react';

const QuoteOfTheDay = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch("https://quotes-api-self.vercel.app/quote")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // Navigate the response JSON to get quote and author
                setQuote(data.quote);
                setAuthor(data.author);
            })
            .catch((error) => {
                setQuote('Failed to load quote.');
                setAuthor('');
            });
    }, []);

    return (
        <div>
            ✨ "{quote}" {author && <span>— {author}</span>}
        </div>
    );
};

export default QuoteOfTheDay;
