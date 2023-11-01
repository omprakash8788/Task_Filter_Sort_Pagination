import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  transition: 0.6s;
  width: 350px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333333;
  }

  p {
    font-size: 1rem;
    color: #666666;
    margin-bottom: 12px;
  }

  p:last-child {
    font-size: 1.2rem;
    font-weight: bold;
    color: #e77600;
  }

`;

const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

const ProductCard = ({ product }) => {
    const truncatedDescription = truncateDescription(product.description);
  return (
    <CardContainer>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{truncatedDescription}</p>
      <p>${product.price}</p>
    </CardContainer>
  );
};

export default ProductCard;





