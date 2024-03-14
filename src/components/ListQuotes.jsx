import { useEffect, useState } from 'react';
import { ShowQuotes } from './ShowQuotes';
import { getQuote } from '../helpr/getQuote';

export const ListQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const newQuote = async () => {
    const quote = await getQuote();
    setQuotes(quote);
  };

  useEffect(() => {
    newQuote();
  }, []);

  return (
    <div
      className="card text-center    "
      style={{ width: '50%', margin: '0 auto' }}
    >
      <div className="card-body ">
        <h1>Personajes Simpson´s</h1>
        {quotes.map((simp) => (
          <ShowQuotes key={simp.character} {...simp} />
        ))}
        <button onClick={newQuote} className="btn btn-primary">
          next quote
        </button>
      </div>
    </div>
  );
};
