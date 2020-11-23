/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product', () => {
  const product = {
    id: 'f33561de3a864f951a',
    type: 'jackets',
    name: 'EWHHOP ROOM',
    color: [
      'blue',
      'red',
      'green',
    ],
    price: 52,
    manufacturer: 'reps',
    availability: 'IN STOCK',
  };

  const component = render(
    <ProductCard
      manufacturer={product.manufacturer}
      name={product.name}
      colors={product.color}
      price={product.price}
      id={product.id}
      type={product.type}
      availability={product.availability}
    />,
  );

  expect(component.container).toHaveTextContent('EWHHOP ROOM jackets by reps • 52€ • blue, red, green');
  expect(component.container).toHaveTextContent('Product ID: f33561de3a864f951a');
  expect(component.container).toHaveTextContent('IN STOCK');
});
