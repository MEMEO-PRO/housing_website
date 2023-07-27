import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
        {/* Image Content */}
      </div>
      <div className="property-details">
        <div className="property-title">{property.location}</div>
        <div className="property-location">Price: ${property.price.toLocaleString()}</div>
        <div className="action-buttons">
          <button className="contact-agent-btn">Contact Agent</button>
          <button className="premium-plan-btn">Buy Premium Plans</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
