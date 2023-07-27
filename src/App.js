import React, { useState } from 'react';
import SearchBar from './SearchBar';
import PropertyCard from './PropertyCard';
import data from './mock_data.json'; // Import the mock data

const App = () => {
  const [properties, setProperties] = useState(data.houses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProperties = data.houses.filter(
      property => property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} handleInputChange={handleInputChange} />
      <div className="property-container">
        {properties.length === 0 ? (
          <div className="no-results">Property not found</div>
        ) : (
          properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
