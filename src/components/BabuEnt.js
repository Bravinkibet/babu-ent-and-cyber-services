import React, { useState } from 'react';
import '../App.css';

function BabuEnt() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const services = [
    "Browsing the Internet",
    "Printing documents",
    "Scanning documents",
    "Movie - Ksh 20",
    "Series - Ksh 30",
    "Series with A,B parts - Ksh 50",
    "KRA (Kenya Revenue Authority) services",
    "Passport application assistance",
    "Passport picture services",
    "Picture printing",
    "Photocopying",
    "Binding",
    "Lamination",
    "Typing services",
    "Document translation",
    "Computer repairs",
    "Windows Software installation",
    "Computer training",
    "Email services",
    "Resume/CV writing assistance",
    "Job application assistance",
    "Online form filling assistance",
    "Event ticket printing",
    "Invitation card printing",
    "Document scanning to PDF",
    // Add more services here
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = services.filter(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredServices(filtered);
  };

  return (
    <div className="BabuEnt">
      <h1>Welcome to Babu Ent & Cyber Services</h1>

      {/* Search Panel */}
      <div className="search-panel">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter service"
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>

      {/* Display Services */}
      <div className="services">
        <h2>Services Offered:</h2>
        <ul>
          {(filteredServices.length > 0 ? filteredServices : services).map((service, index) => (
            <li key={index} className="service-item">{service}</li>
          ))}
        </ul>
      </div>

      {/* External Links */}
      <div className="external-links">
        <h2>External Links:</h2>
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

export default BabuEnt;
