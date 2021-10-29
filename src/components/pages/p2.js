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

export default function p2() {
    return (
        <Row xs={1} s={2} md={2}>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Work Day Scheduler</Card.Header>
                <Card.Img variant="top" src="./assets/images/workdayscheduler.png" />
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Description</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>This is a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</ListGroup.Item>
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
                <Button variant="primary" href="https://github.com/ctolnai/work-day-scheduler" target="_blank">Github Repo</Button>
                <Button variant="primary" href="https://ctolnai.github.io/work-day-scheduler/" target="_blank">Deployed Application</Button>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Technologies</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>html</ListGroup.Item>
                    <ListGroup.Item>css</ListGroup.Item>
                    <ListGroup.Item>javascript</ListGroup.Item>
                    <ListGroup.Item>jquery</ListGroup.Item>
                    <ListGroup.Item>moment.js</ListGroup.Item>
                </ListGroup>
            </Card>
        </Row>
    );
}