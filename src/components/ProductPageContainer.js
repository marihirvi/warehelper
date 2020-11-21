import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import ProductPage from './ProductPage'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

const ProductPageContainer = ({ category, products, availabilities, loadingProducts, loadingAvailability }) => {

    let { path, url } = useRouteMatch();

    if (loadingProducts) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>All {category}</h2>
                        <Spinner animation="border" />
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Switch>
                <Route path={`${path}/:page`}>
                    <ProductPage
                        url={url}
                        category={category}
                        products={products}
                        availabilities={availabilities}
                        loadingAvailability={loadingAvailability}/>
                </Route>
            </Switch>

        )
    }
}

export default ProductPageContainer;