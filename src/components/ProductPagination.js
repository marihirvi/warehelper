import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const ProductPagination = ({ url, pageNumber, numberOfPages }) => {

    const nextPage = (current) => {
        return current === numberOfPages ? numberOfPages : current + 1
    }

    const previousPage = (current) => {
        return current === 1 ? current : current - 1
    }

    const offset = 5;

    // generate page numbers

    let pageNumbers = [];

    for (let n = 1; n <= numberOfPages; n++) {

        if (n === 1 || n === numberOfPages || (n >= pageNumber - offset && n <= pageNumber + offset)) {
            pageNumbers.push(
                <Pagination.Item key={n} as="span" active={n === pageNumber}>
                    <Link to={`${url}/${n}`}>{n}</Link>
                </Pagination.Item>
            );
        } else if (n === pageNumber - offset - 1 || n === pageNumber + offset + 1) {
            pageNumbers.push(
                <Pagination.Ellipsis key={n} />
            )
        }
    }

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
    )
}

export default ProductPagination