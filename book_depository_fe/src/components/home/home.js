import React from 'react'
import { Container, FormControl, InputGroup, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { authors_url, books_url, genres_url } from '../../api_urls';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "", books: [], authors: [], genres: [] }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
        fetch(`${books_url}?search=${this.state.search}`)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ books: data })
                }
            )
            .catch(
                err => {
                    this.setState({ error: err })
                }
            )

        fetch(`${authors_url}?search=${this.state.search}`)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ authors: data })
                }
            )
            .catch(
                err => {
                    this.setState({ error: err })
                }
            )

            fetch(`${genres_url}?search=${this.state.search}`)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ genres: data })
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
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
                    <FormControl name="search" value={this.state.search} aria-label="Large" onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <Container >
                    <ListGroup>
                        <ListGroup.Item disabled>
                            Books
                        </ListGroup.Item>
                        {this.state.books.map((book) => {
                            return <ListGroup.Item key={book.id} action as={Link} to={`books/${book.id}`}>
                                {book.name}
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item disabled>
                            Authors
                        </ListGroup.Item>
                        {this.state.authors.map((author) => {
                            return <ListGroup.Item key={author.id} action as={Link} to={`authors/${author.id}`}>
                                {author.name}
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item disabled>
                            Genres
                        </ListGroup.Item>
                        {this.state.genres.map((genre) => {
                            return <ListGroup.Item key={genre.id} action as={Link} to={`genres/${genre.id}`}>
                                {genre.name}
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                </Container>
            </Container>
        )
    }
}

export default Home