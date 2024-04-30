import React from 'react';

function MovieServices() {
  const movieServices = [
    "Series - Ksh 30",
    "Movie - Ksh 20",
    "Series with A,B parts - Ksh 50",
  ];

  return (
    <div className="movie-services">
      <h2>Movie and Series Services:</h2>
      <ul>
        {movieServices.map((service, index) => (
          <li key={index} className="service-item">{service}</li>
        ))}
      </ul>
      {/* External Link */}
      <div className="click to view movies link">
        <h3>Movies and Series Link:</h3>
        <ul>
          <li className="external-link-item">
            <a href="https://www.imdb.com" target="_blank" rel="noopener noreferrer">
              IMDb Movies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieServices;
