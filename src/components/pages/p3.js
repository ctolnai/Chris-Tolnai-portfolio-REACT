import React from 'react';
import { Card, Button, Row, ListGroup } from 'react-bootstrap/';

const cardstyle={
    maxWidth: '30rem', 
    minWidth: '20rem',
    height: 'auto', 
    margin: '15px', 
}

const headerstyle={
    fontSize: "22px", 
    width:"auto", 
    height:"3rem"
}

export default function P3() {
    return (
        <Row xs={1} s={2} md={2}>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Note Taker</Card.Header>
                <Card.Img variant="top" src="./assets/images/notetaker.png" />
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Description</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>This application is used to write, save and delete notes. It uses HTML5 and CSS3 on the front end, while using Express.js on the back end. The application is deployed on Heroku.</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Role</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>I worked on this project on my own.</ListGroup.Item>
                </ListGroup>
            </Card>
             <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Deployment</Card.Header>
                <Button variant="primary" href="https://github.com/ctolnai/note-taker" target="_blank">Github Repo</Button>
                <Button variant="primary" href="https://note-taker-ct-2021.herokuapp.com/" target="_blank">Deployed Application</Button>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Technologies</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>html</ListGroup.Item>
                    <ListGroup.Item>css</ListGroup.Item>
                    <ListGroup.Item>javascript</ListGroup.Item>
                    <ListGroup.Item>express</ListGroup.Item>
                </ListGroup>
            </Card>
        </Row>
    );
}