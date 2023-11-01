
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  } */

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductList = ({ products }) => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
};

export default ProductList;


