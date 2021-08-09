import { Button } from 'bootstrap';
import React from 'react'
import { Container, Image, ListGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authors_url, books_url } from '../../api_urls';

export default class AuthorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id }
    }
    componentDidMount() {
        const url = authors_url + this.state.id + "/"
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                id: data.id,
                photo: data.photo,
                name: data.name,
                about: data.about
            }))
            .catch((res) => alert(res))
    }
    render() {
        return <Container>
            <Image src={this.state.photo} width="80%" height="15%" />
            <br />
            <h4>{this.state.name}</h4>
            <br />
            <hr />
            About
            <hr />
            <p>
                {this.state.about}
            </p>
            <br />
            <Button as={Link} to={`/books?author=${this.state.id}`}>View Books</Button>
        </Container>
    }
}