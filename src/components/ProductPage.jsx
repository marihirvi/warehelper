/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCardList from './ProductCardList';
import ProductPagination from './ProductPagination';
import ErrorMessage from './ErrorMessage';

const ProductPage = ({
  url, category, products, availabilities, loadingAvailability,
}) => {
  const { page } = useParams();
  const pageNumber = Number(page);

  const productsPerPage = 30;
  const numberOfPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = pageNumber * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  if (products.length >= 1 && pageNumber > 0 && pageNumber <= numberOfPages) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              {`All ${category}`}
            </h2>
            <p>
              {`Page ${page} of ${numberOfPages}`}
            </p>
            <p>
              {`Displaying ${indexOfFirstProduct + 1} - ${indexOfLastProduct} of ${products.length} items`}
            </p>
          </Col>
        </Row>
        <Row>
          <ProductCardList
            currentProducts={currentProducts}
            loadingAvailability={loadingAvailability}
            availabilities={availabilities}
          />
        </Row>
        <Row>
          <Col>
            <ProductPagination
              url={url}
              pageNumber={pageNumber}
              numberOfPages={numberOfPages}
            />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            {`All ${category}`}
          </h2>
          <ErrorMessage message="Sorry! Something went wrong. Try checking the URL or reloading the page." />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
