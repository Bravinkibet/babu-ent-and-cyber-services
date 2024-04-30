import React, { useState } from 'react';
import '../App.css';
import OnlineServices from './OnlineServices';
import PrintingServices from './PrintingServices';
import MovieServices from './MovieServices';

function BabuEnt() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const services = [
    "Printing documents",
    "Scanning documents",
    "Lamination",
    "Picture printing",
    "Photocopying",
    "Binding",
    "Passport picture services",
    "Faxing",
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
    "Audio/video editing services",
    "CD/DVD burning services",
    "Browsing the Internet",
    "KRA (Kenya Revenue Authority) services",
    "Passport application assistance",
    "Series - Ksh 30",
    "Movie - Ksh 20",
    "Series with A,B parts - Ksh 50",
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
          placeholder="Enter service name"
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

      {/* Printing Services */}
      <PrintingServices />

      {/* Online Services */}
      <OnlineServices />

      {/* Movie Services */}
      <MovieServices />
    </div>
  );
}

export default BabuEnt;
