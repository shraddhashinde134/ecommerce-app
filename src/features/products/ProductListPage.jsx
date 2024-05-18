import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ProductListPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    // This is just a placeholder implementation
    setSearchResults([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
