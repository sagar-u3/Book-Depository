import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signup_url } from '../../api_urls';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(signup_url, {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {localStorage.setItem("token", data["token"])})
            .catch(err=>console.log(err))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="first_name" type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="last_name" type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
            </Container>
        )
    }
}

export default Signup