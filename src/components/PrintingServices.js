import React from 'react';

function PrintingServices() {
  const printingServices = [
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
    "Event ticket printing",
    "Invitation card printing",
    "Document scanning to PDF",
    "CD/DVD burning services",
  ];

  return (
    <div className="printing-services">
      <h2>Printing and Physical Services:</h2>
      <ul>
        {printingServices.map((service, index) => (
          <li key={index} className="service-item">{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrintingServices;
