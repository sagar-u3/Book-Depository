import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { authors_url } from '../../api_urls';
import AuthorTile from './AuthorTile';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] }
    }

    componentDidMount() {
        fetch(authors_url)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ authors: data })
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
            <Row xs={1} md={5} className="g-4">{this.state.authors.map((author, index) => (
                <Col><AuthorTile key={index} author={author} /></Col>
            ))}</Row>
        );
    }
}

export default Authors