export const getQuote = async () => {
  const resp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const data = await resp.json();
  const pj = data.map(({ quote, character, image }) => {
    return {
      quote,
      character,
      image,
    };
  });
  return pj;
};
