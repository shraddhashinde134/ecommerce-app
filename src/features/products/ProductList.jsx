import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [filters, setFilters] = useState({ size: '', color: '', brand: '' });
  const [sortOrder, setSortOrder] = useState({ field: '', direction: '' });
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchProduct(searchedProducts);
  };

  const resetSearch = () => {
    setSearchProduct([]);
  };

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (field, direction) => {
    setSortOrder({ field, direction });
  };

  const filteredProducts = (searchProduct.length > 0 ? searchProduct : products)
    .filter((product) =>
      Object.entries(filters).every(([key, value]) => !value || product[key] === value)
    )
    .sort((a, b) => {
      if (!sortOrder.field) return 0;
      const isReversed = sortOrder.direction === 'desc' ? -1 : 1;
      return isReversed * (a[sortOrder.field] > b[sortOrder.field] ? 1 : -1);
    });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <SearchBar onSearch={handleSearch} 
        onReset={resetSearch}
        style={{ width: '700px' }} />
      </div>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <label className="mr-2">Size:</label>
        <select name="size" onChange={handleFilterChange} className="border rounded p-2">
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <label className="mr-2">Color:</label>
        <select name="color" onChange={handleFilterChange} className="border rounded p-2">
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
        <label className="mr-2">Brand:</label>
        <select name="brand" onChange={handleFilterChange} className="border rounded p-2">
          <option value="">All</option>
          <option value="Kiddo">Kiddo</option>
          <option value="TinyFeet">TinyFeet</option>
          <option value="BackpackBuddies">BackpackBuddies</option>
          <option value="SunnyDay">SunnyDay</option>
          <option value="ToyTown">ToyTown</option>
        </select>
        <div className="ml-auto space-x-2">
          <select onChange={(e) => {
            const direction = e.target.value === 'asc' ? 'asc' : 'desc';
            handleSortChange('price', direction);
          }}>
            <option value="">Sort by Price</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <select onChange={(e) => {
            const direction = e.target.value === 'asc' ? 'asc' : 'desc';
            handleSortChange('popularity', direction);
          }}>
            <option value="">Sort by Popularity</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border p-4 rounded cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <button onClick={loadMore} className="btn mt-4">Load More</button>
      )}
    </div>
  );
};

export default ProductList;
