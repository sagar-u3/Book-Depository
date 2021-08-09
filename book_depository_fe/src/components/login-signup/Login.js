import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { login_url } from '../../api_urls'
import { Link, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ErrorMessage from '../alert/ErrorMessage';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "", error:false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(login_url, {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                if (data['token']) {
                    localStorage.setItem("token", data["token"]);
                    localStorage.setItem("name", data["name"]);
                }
                else{
                    this.setState({'error':true})
                }
                    this.setState({ password: "" })
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (localStorage.getItem('token')) {
            return (
                <Redirect to="/"></Redirect>
            )
        }
        return (
            <Container>
                <ErrorMessage show={this.state.error} text="Please check your credentials and try again."/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <Link to="/signup">Sign up?</Link>
            </Container>
        )
    }
}

export default Login