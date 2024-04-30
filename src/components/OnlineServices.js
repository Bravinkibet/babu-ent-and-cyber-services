import React from 'react';

function OnlineServices() {
  const onlineServices = [
    "Browsing the Internet",
    "KRA (Kenya Revenue Authority) services",
    "Passport application assistance",
    "Online form filling assistance",
    "Email services",
  ];

  return (
    <div className="online-services">
      <h2>Online Services:</h2>
      <ul>
        {onlineServices.map((service, index) => (
          <li key={index} className="service-item">{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineServices;
