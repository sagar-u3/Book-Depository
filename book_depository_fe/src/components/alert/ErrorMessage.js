
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

export default function ErrorMessage(props) {
    const [show, setShow] = useState(true);
    if (show && props.show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {props.text}
                </p>
            </Alert>
        );

    }
    return (<span></span>)
}