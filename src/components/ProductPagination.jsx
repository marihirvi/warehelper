/* eslint-disable react/prop-types */
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { generatePageNumbers } from '../utils/helper';

const ProductPagination = ({ url, pageNumber, numberOfPages }) => {
  const nextPage = (current) => (current === numberOfPages ? numberOfPages : current + 1);

  const previousPage = (current) => (current === 1 ? current : current - 1);

  const pageNumbers = generatePageNumbers(url, numberOfPages, pageNumber, 5);

  return (
    <Container style={{ padding: '10px' }}>
      <Pagination className="justify-content-center">
        <Pagination.Item as="span">
          <Link to={`${url}/1`}>«</Link>
        </Pagination.Item>
        <Pagination.Item as="span">
          <Link to={`${url}/${previousPage(pageNumber)}`}>‹</Link>
        </Pagination.Item>
        {pageNumbers}
        <Pagination.Item as="span">
          <Link to={`${url}/${nextPage(pageNumber)}`}>›</Link>
        </Pagination.Item>
        <Pagination.Item as="span">
          <Link to={`${url}/${numberOfPages}`}>»</Link>
        </Pagination.Item>
      </Pagination>
    </Container>
  );
};

export default ProductPagination;
