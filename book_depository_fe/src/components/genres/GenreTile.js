import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function GenreTile(props) {
    console.log(props)
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.genre.name}</Card.Title>
            <Button variant="primary" as={Link} to={'/genres/'+props.key} >View Books</Button>
        </Card.Body>
    </Card>;
}

export default GenreTile