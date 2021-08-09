import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { books_url } from '../../api_urls';
import BookTile from './BookTile';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [] }
    }

    componentDidMount() {
        fetch(books_url)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ books: data })
                    console.log(data)
                }
            )
            .catch(
                err => {
                    this.setState({ error: err })
                }
            )
    }

    render() {
        return (
            <Row xs={1} md={5} className="g-4">{this.state.books.map((book, index) => (
                <Col><BookTile key={index} book={book} /></Col>
            ))}</Row>
        );
    }
}

export default Books