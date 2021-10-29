import React from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap/';

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

export default function P1() {
    return (
        <Row xs={1} s={2} md={2}>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>ParkSmart</Card.Header>
                <Card.Img variant="top" src="./assets/images/parksmart.png" />
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Description</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>Users in a neighborhood can create an account on the Park Smart © app. Once they are logged in, they are presented with a map of their neighborhood block with numbered street parking spaces that are color-coded based on availability. Spaces that are green are available and spaces that are red are taken. Once a user parks in an available space, they click on the designated number on the app’s map, where they may then choose, “I am parking here” and have the option of adding what time they plan on leaving. When they submit the form, the space will turn red and the ‘time available’ will be included as an attribute users can see when they view the space. Users can also update their ‘leave time’ if they plan on leaving sooner or later than they originally stated.</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Role</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>I worked on a team of three for this project.  My responsibilities were to create the MVC framework, models, SQL database & seed data, routes and other backend js and deploy the application using Heroku and JawsDB.</ListGroup.Item>
                </ListGroup>
            </Card>
             <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Deployment</Card.Header>
                <Button variant="primary" href="https://github.com/Kimberly-Rodriguez/ParkSmart" target="_blank">Github Repo</Button>
                <Button variant="primary" href="https://parksmart2021.herokuapp.com/" target="_blank">Deployed Application</Button>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Technologies</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>html</ListGroup.Item>
                    <ListGroup.Item>css</ListGroup.Item>
                    <ListGroup.Item>javascript</ListGroup.Item>
                    <ListGroup.Item>bootstrap</ListGroup.Item>
                    <ListGroup.Item>sequelize</ListGroup.Item>
                    <ListGroup.Item>mysql2</ListGroup.Item>
                    <ListGroup.Item>bcrypt</ListGroup.Item>
                    <ListGroup.Item>express</ListGroup.Item>
                    <ListGroup.Item>handlebars</ListGroup.Item>
                    <ListGroup.Item>moment.js</ListGroup.Item>
                </ListGroup>
            </Card>
        </Row>
    );
}