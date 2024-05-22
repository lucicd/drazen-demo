import { useState, useEffect } from "react";
import Quote from "./Quote";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteGenerator() {
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuotes() {
      setIsFetching(true);
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setQuotes(data);
        setQuote(getRandomQuote(data));
      } catch (error) {
        setError({
          message: "Failed to fetch quotes. Please try again later.",
        });
      }
      setIsFetching(false);
    }
    fetchQuotes();
  }, []);

  function getNewQuote() {
    const quote = getRandomQuote(quotes);
    setQuote(quote);
  }

  if (error) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    );
  }

  return (
    <>
      {isFetching && <Spinner />}
      {!isFetching && (
        <Quote
          text={quote?.text}
          author={quote?.author}
          onNewQuote={getNewQuote}
        />
      )}
    </>
  );
}
