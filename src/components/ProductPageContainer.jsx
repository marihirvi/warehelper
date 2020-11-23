/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ProductPage from './ProductPage';

const ProductPageContainer = ({
  category, products, availabilities, loadingProducts, loadingAvailability,
}) => {
  const { path, url } = useRouteMatch();

  if (loadingProducts) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              {`All ${category}`}
            </h2>
            <Spinner animation="border" />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <ProductPage
          url={url}
          category={category}
          products={products}
          availabilities={availabilities}
          loadingAvailability={loadingAvailability}
        />
      </Route>
      <Route path={`${path}/:page`}>
        <ProductPage
          url={url}
          category={category}
          products={products}
          availabilities={availabilities}
          loadingAvailability={loadingAvailability}
        />
      </Route>
    </Switch>

  );
};

export default ProductPageContainer;
