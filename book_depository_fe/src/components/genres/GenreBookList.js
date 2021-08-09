import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { genres_url, books_url } from '../../api_urls';
import BookTile from '../books/BookTile';


class GenreBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [], id: this.props.match.params.id, name: "" }
    }

    componentDidMount() {
        fetch(books_url + "?genre=" + this.state.id)
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
        fetch(genres_url + this.state.id + "/")
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ name: data.name })
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
            <Container>
                <h3>Genre: {this.state.name}</h3>
                <Row xs={1} md={5} className="g-4">{this.state.books.map((book, index) => (
                    <Col><BookTile key={book.id} book={book} /></Col>
                ))}</Row>
            </Container>
        );
    }
}

export default GenreBookList