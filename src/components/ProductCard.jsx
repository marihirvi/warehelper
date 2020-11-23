/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { availabilityColor } from '../utils/helper';

const ProductCard = ({
  manufacturer, name, colors, price, availability, id, type,
}) => {
  const colorString = colors.join(', ');
  const badgeColor = availabilityColor(availability);

  return (
    <Card bg="light">
      <Card.Body>
        <Card.Subtitle>
          {`${name} ${type} by ${manufacturer} • ${price}€ • ${colorString}`}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Badge variant={badgeColor}>{availability}</Badge>
        <small>
          {`   Product ID: ${id}`}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
