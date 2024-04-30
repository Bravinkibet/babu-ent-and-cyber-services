import React, { useState } from 'react';
import OnlineServices from './OnlineServices';
import PrintingServices from './PrintingServices';
import MovieServices from './MovieServices';

function BabuEnt() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = () => {
    // Implement search functionality here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div>
      <h1>Welcome to Babu Ent and Cyber services</h1>

      {/* Search Panel */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter search query..."
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>

      {/* Services Offered */}
      <h2>Services Offered:</h2>
      <ul>
        <li>Browsing the Internet</li>
        <li>Printing documents (Charges: Ksh 5 per page)</li>
        <li>Scanning documents (Charges: Ksh 10 per page)</li>
        <li>
          Movies/Series:
          <ul>
            <li>
              Movie - Ksh 20
            </li>
            <li>
              Series - Ksh 30
            </li>
            <li>
              Series with A,B parts - Ksh 50
            </li>
          </ul>
        </li>
        {/* Add more services */}
      </ul>

      {/* External Links */}
      <h2>External Links:</h2>
      <ul>
        <li>
          <a href="https://www.imdb.com" target="_blank" rel="noopener noreferrer">
            IMDb Movies
          </a>
        </li>
        {/* Add more external links as needed */}
      </ul>
    </div>
  );
}

export default BabuEnt;
