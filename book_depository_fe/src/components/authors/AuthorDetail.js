import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { authors_url } from '../../api_urls';

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
            <Button as={Link} to={`/authors/${this.state.id}/books`}>View Books</Button>
        </Container>
    }
}