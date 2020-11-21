/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ProductPageContainer from './ProductPageContainer';
import HomePage from './HomePage';

const PageContainer = ({
  products, availabilities, loadingProducts, loadingAvailability,
}) => (
  <Container>
    <Router>
      <Row>
        <Navbar>
          <Navbar.Brand><Link to="/">WareHelper</Link></Navbar.Brand>
          <Nav>
            <Nav.Link href="#" as="span">
              <Link to="/all/1">All products</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/jackets/1">Jackets</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/shirts/1">Shirts</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/accessories/1">Accessories</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Row>
      <Switch>
        <Route path="/all">
          <ProductPageContainer
            category="products"
            products={products}
            availabilities={availabilities}
            loadingProducts={loadingProducts}
            loadingAvailability={loadingAvailability}
          />
        </Route>
        <Route path="/jackets">
          <ProductPageContainer
            category="jackets"
            products={products.filter((p) => p.type === 'jackets')}
            availabilities={availabilities}
            loadingProducts={loadingProducts}
            loadingAvailability={loadingAvailability}
          />
        </Route>
        <Route path="/shirts">
          <ProductPageContainer
            category="shirts"
            products={products.filter((p) => p.type === 'shirts')}
            availabilities={availabilities}
            loadingProducts={loadingProducts}
            loadingAvailability={loadingAvailability}
          />
        </Route>
        <Route path="/accessories">
          <ProductPageContainer
            category="accessories"
            products={products.filter((p) => p.type === 'accessories')}
            availabilities={availabilities}
            loadingProducts={loadingProducts}
            loadingAvailability={loadingAvailability}
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </Container>
);

export default PageContainer;
