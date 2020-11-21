import React from 'react'
import ProductList from './ProductList'
import ProductPagination from './ProductPagination'
import ErrorMessage from './ErrorMessage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'

const ProductPage = ({ url, category, products, availabilities, loadingAvailability }) => {

    let { page } = useParams();
    const pageNumber = Number(page);

    const productsPerPage = 30
    const numberOfPages = Math.ceil(products.length / productsPerPage)
    const indexOfLastProduct = pageNumber * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    if (pageNumber > 0 && pageNumber <= numberOfPages) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>All {category}</h2>
                        <p>Page {page} of {numberOfPages}</p>
                        <p>Displaying {indexOfFirstProduct + 1} - {indexOfLastProduct} of {products.length} items</p>
                    </Col>
                </Row>
                <Row>
                    <ProductList
                        currentProducts={currentProducts}
                        loadingAvailability={loadingAvailability}
                        availabilities={availabilities} />
                </Row>
                <Row>
                    <Col>
                        <ProductPagination
                            url={url}
                            pageNumber={pageNumber}
                            numberOfPages={numberOfPages} />
                    </Col>
                </Row>
            </Container>
        )

    } else {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>All {category}</h2>
                        <ErrorMessage message={"Sorry! The page you are looking for cannot be found."} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductPage