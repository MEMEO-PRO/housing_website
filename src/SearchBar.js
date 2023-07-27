import React from 'react';

const SearchBar = ({ handleSearch, handleInputChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by location..."
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
