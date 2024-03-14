import React from 'react';

export const ShowQuotes = ({ character, image, quote }) => {
  return (
    <div className="card-body  ">
      <p className=" card-text">{quote} </p>
      <img src={image} alt={character} />
      <p className="card-title">{character}</p>
    </div>
  );
};
