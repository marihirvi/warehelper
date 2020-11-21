/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const helper = require('../utils/helper');

const ProductCard = ({
  manufacturer, name, colors, price, availability, id, type,
}) => {
  const colorString = colors.join(', ');
  const badgeColor = helper.availabilityColor(availability);
  const availString = helper.availabilityText(availability);

  return (
    <Card bg="light" style={{ 'margin-bottom': '5px' }}>
      <Card.Body>
        <Card.Subtitle>
          {`${name} ${type} by ${manufacturer} • ${price}€ • ${colorString}`}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Badge variant={badgeColor}>{availString}</Badge>
        <small>
          {`   Product ID: ${id}`}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
