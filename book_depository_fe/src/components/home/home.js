import React from 'react'
import { Container, FormControl, InputGroup } from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <Container>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </Container>
        )
    }
}

export default Home