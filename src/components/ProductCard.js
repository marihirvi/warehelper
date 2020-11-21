import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ProductIcon from './ProductIcon'
const helper = require('../utils/helper');

const ProductCard = ({ manufacturer, name, colors, price, availability, id, type }) => {

    const colorString = colors.join(', ')
    const badgeColor = helper.availabilityColor(availability)
    const availString = helper.availabilityText(availability)

    return (
       <Card bg="light">
            <Card.Body>
                <Card.Title><ProductIcon type={type} /> {name} by {manufacturer}</Card.Title>
                <Card.Subtitle>{price}€ • Color: {colorString}</Card.Subtitle>
                <Badge variant={badgeColor}>{availString}</Badge>
            </Card.Body>
            <Card.Footer><small>Product ID: {id}</small></Card.Footer>
        </Card>
    )
}

export default ProductCard;