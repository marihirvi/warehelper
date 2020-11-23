/* eslint-disable react/prop-types */
import React from 'react';
import _ from 'lodash';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';

const ProductCardList = ({ currentProducts, loadingAvailability, availabilities }) => {
  const getProductAvailability = (product) => {
    if (loadingAvailability === false) {
      return _.find(availabilities, (a) => a.id === product.id).availability;
    }
    return 'LOADING';
  };

  return (
    <Col>
      {currentProducts.map((p) => (
        <ProductCard
          key={p.id}
          manufacturer={p.manufacturer}
          name={p.name}
          colors={p.color}
          price={p.price}
          availability={getProductAvailability(p)}
          id={p.id}
          type={p.type}
        />
      ))}
    </Col>
  );
};

export default ProductCardList;
