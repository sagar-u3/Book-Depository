import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AuthorTile(props) {
    console.log(props)
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.author.photo} alt="Photo not available" height="150" width="250"/>
        <Card.Body>
            <Card.Title>{props.author.name}</Card.Title>
            <Card.Text>
                {props.author.about}
            </Card.Text>
            <Button variant="primary" as={Link} to={'/authors/'+props.author.id} >View Author</Button>
        </Card.Body>
    </Card>;
}

export default AuthorTile