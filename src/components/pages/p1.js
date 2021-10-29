import React from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap/';

export default function P1() {
  return (
    <Row>
      <Col>
        <Card style={{ width: '30rem' }}>
          <Card.Header style={{ fontSize: "22px" }}>Description</Card.Header>
          <ListGroup style={{ fontSize: "18px" }} variant="flush">
            <ListGroup.Item>Users in a neighborhood can create an account on the Park Smart © app. Once they are logged in, they are presented with a map of their neighborhood block with numbered street parking spaces that are color-coded based on if they are taken or available. Spaces that are green are available and spaces that are red are taken. Once a user parks in an available space, they click on the designated number on the app’s map, where they may then choose, “I am parking here” & have the option of adding what time they plan on leaving. When they submit the form, the space will turn red & the ‘time available’ will be included as an attribute users can see when they view the space. Users can also update their ‘leave time’ if they plan on leaving sooner or later than they originally stated. Other users are now able to edit the spot once they have parked there.</ListGroup.Item>
          </ListGroup>
          <Card.Header style={{ fontSize: "22px" }}>Technologies</Card.Header>
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
          <Card.Header style={{ fontSize: "22px" }}>Role</Card.Header>
          <ListGroup style={{ fontSize: "18px" }} variant="flush">
          <ListGroup.Item>I did...</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col>
        <Card className="text-center">
          <Card.Header>ParkSmart</Card.Header>
          <Card.Img variant="top" src="./assets/images/parksmart.png" />
          <Card.Body>
            <Button variant="primary" href="https://github.com/Kimberly-Rodriguez/ParkSmart" target="_blank">Github Repo</Button>
            <Button variant="primary" href="https://parksmart2021.herokuapp.com/" target="_blank">Deployed Application</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}