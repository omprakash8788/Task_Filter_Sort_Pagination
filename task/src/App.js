import React, { useState, useEffect } from 'react';
import FilterAndSort from './component/FilterandSort';
import ProductList from './component/ProductList';
import Pagination from './component/Pagination';
import styled from 'styled-components';
import Navbar from './component/Navbar';


const Container = styled.div`
  margin:auto;
  padding: 20px;
`;

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');


  // call api 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  //  handle filter function
  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProducts(e.target.value, sortOrder);
  };
 
  // sort change function
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    filterProducts(selectedCategory, e.target.value);
  };

  const filterProducts = (category, order) => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (order === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Navbar/>
      <h1>Product List</h1>
      <FilterAndSort
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
      />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default App;
