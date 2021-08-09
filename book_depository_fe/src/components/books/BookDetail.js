import React from 'react'
import { Container, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { books_url } from '../../api_urls';

export default class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id }
    }
    componentDidMount() {
        const url = books_url + this.state.id + "/"
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                cover: data.cover,
                name: data.name,
                description: data.description,
                isbn: data.isbn,
                price: data.price,
                author_id: data.author.id,
                author_photo: data.author.photo,
                author_name: data.author.name
            }))
            .catch((res) => alert(res))
    }
    render() {
        return <Container>
            <Image src={this.state.cover} width="80%" height="15%" />
            <br />
            <h4>{this.state.name}</h4>
            <br />
            <hr />
            Description
            <hr />
            <p>
                {this.state.description}
            </p>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <td>{this.state.isbn}</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Price</th>
                        <td>${this.state.price}</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Author</th>
                        <td>
                            <Link to={"/authors/" + this.state.author_id}>
                                <Image src={this.state.author_photo} roundedCircle height="5%" width="5%" />
                                {" " + this.state.author_name}
                            </Link>
                        </td>
                    </tr>
                </thead>
            </Table>

        </Container>
    }
}