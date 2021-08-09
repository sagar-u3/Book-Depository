import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function BookTile(props) {
    console.log(props)
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.book.cover} alt="Cover not available" height="150" width="250"/>
        <Card.Body>
            <Card.Title>{props.book.name}</Card.Title>
            <Card.Text>
                {props.book.description}
            </Card.Text>
            <Button variant="primary" as={Link} to={'/books/'+props.book.id} >Details</Button>
        </Card.Body>
    </Card>;
}

export default BookTile