import React from 'react';
import styled from 'styled-components';

const FilterAndSortContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width:500px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 0;
  }
`;

const FilterAndSort = ({ handleFilterChange, handleSortChange }) => {
  return (
    <FilterAndSortContainer>
      <div>
        <Label htmlFor="category">Filter by category:</Label>
        <Select id="category" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="sort">Sort by price:</Label>
        <Select id="sort" onChange={handleSortChange}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </div>
    </FilterAndSortContainer>
  );
};

export default FilterAndSort;

