/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Pagination from 'react-bootstrap/Pagination';

export const listManufacturers = (productData) => {
  const productsByManufacturer = _.groupBy(productData, (p) => p.manufacturer);
  const manufacturers = _.map(productsByManufacturer, (key, value) => value);
  return manufacturers;
};

export const getAvailabilityInfo = (payload) => {
  const s = String(payload);
  if (_.includes(s, '>INSTOCK<')) { return 'IN STOCK'; }
  if (_.includes(s, '>OUTOFSTOCK<')) { return 'OUT OF STOCK'; }
  if (_.includes(s, '>LESSTHAN10<')) { return 'LESS THAN 10'; }
  return 'AVAILABILITY UNKNOWN';
};

// eslint-disable-next-line max-len
export const cleanUpAvailability = (data) => data.map((item) => ({ id: item.id.toLowerCase(), availability: getAvailabilityInfo(item.DATAPAYLOAD) }));

export const availabilityColor = (availability) => {
  switch (availability) {
    case 'IN STOCK':
      return 'success';
    case 'LESS THAN 10':
      return 'warning';
    case 'OUT OF STOCK':
      return 'danger';
    default:
      return 'secondary';
  }
};

export const generatePageNumbers = (url, numberOfPages, pageNumber, offset) => {
  const pageNumbers = [];

  for (let n = 1; n <= numberOfPages; n += 1) {
    if (n === 1 || n === numberOfPages || (n >= pageNumber - offset && n <= pageNumber + offset)) {
      pageNumbers.push(
        <Pagination.Item key={n} as="span" active={n === pageNumber}>
          <Link to={`${url}/${n}`}>{n}</Link>
        </Pagination.Item>,
      );
    } else if (n === pageNumber - offset - 1 || n === pageNumber + offset + 1) {
      pageNumbers.push(
        <Pagination.Ellipsis key={n} />,
      );
    }
  }
  return pageNumbers;
};
