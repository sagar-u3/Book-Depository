import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { genres_url } from '../../api_urls';
import GenreTile from './GenreTile';

class Genres extends React.Component {
    constructor(props) {
        super(props);
        this.state = { genres: [] }
    }

    componentDidMount() {
        fetch(genres_url)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ genres: data })
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
            <Row xs={1} md={5} className="g-4">{this.state.genres.map((genre, index) => (
                <Col><GenreTile key={index} genre={genre} /></Col>
            ))}</Row>
        );
    }
}

export default Genres