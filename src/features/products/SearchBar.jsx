import React, { useState } from 'react';

const SearchBar = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
        className="border rounded py-1 px-2"
      />
      <button type="submit" className="btn">Search</button>
      <button type="button" onClick={handleReset} className="btn btn-outline">Reset</button>
    </form>
  );
};

export default SearchBar;
