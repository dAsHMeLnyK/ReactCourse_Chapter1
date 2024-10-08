import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}

export default SearchBar;
