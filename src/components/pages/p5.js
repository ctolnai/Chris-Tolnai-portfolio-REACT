import React from 'react';
import { Card, Button, Row, ListGroup } from 'react-bootstrap/';

const cardstyle = {
  maxWidth: '30rem',
  minWidth: '20rem',
  height: 'auto',
  margin: '15px',
}

const headerstyle = {
  fontSize: "22px",
  width: "auto",
  height: "3rem"
}

export default function p5() {
  return (
    <Row xs={1} s={2} md={2}>
      <Card style={cardstyle}>
        <Card.Header style={headerstyle}>News For You</Card.Header>
        <Card.Img variant="top" src="./assets/images/newsforyou.png" />
      </Card>
      <Card style={cardstyle}>
        <Card.Header style={headerstyle}>Description</Card.Header>
        <ListGroup style={{ fontSize: "18px" }} variant="flush">
          <ListGroup.Item>This application is a user friendly webpage designed for a new form of media that is more tailored to you than any other news website. In this website insted of just browsing the latest news you can also get the option to select which category of news you would like to view compared to other ones!</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={cardstyle}>
        <Card.Header style={headerstyle}>Role</Card.Header>
        <ListGroup style={{ fontSize: "18px" }} variant="flush">
          <ListGroup.Item>I worked on a team of four for this project.  My responsibilities were to create the MVC layout, queries, mutations, typedefs, models, mongo database, seed data, and deploy the application on Heroku.</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={cardstyle}>
        <Card.Header style={headerstyle}>Deployment</Card.Header>
        <Button variant="primary" href="https://github.com/ctolnai/newsforyou" target="_blank">Github Repo</Button>
        <Button variant="primary" href="https://blooming-mesa-06853.herokuapp.com/" target="_blank">Deployed Application</Button>
      </Card>
      <Card style={cardstyle}>
        <Card.Header style={headerstyle}>Technologies</Card.Header>
        <ListGroup style={{ fontSize: "18px" }} variant="flush">
          <ListGroup.Item>html</ListGroup.Item>
          <ListGroup.Item>css</ListGroup.Item>
          <ListGroup.Item>javascript</ListGroup.Item>
          <ListGroup.Item>mysql</ListGroup.Item>
          <ListGroup.Item>graphql</ListGroup.Item>
          <ListGroup.Item>mongodb</ListGroup.Item>
          <ListGroup.Item>express</ListGroup.Item>
          <ListGroup.Item>react</ListGroup.Item>
          <ListGroup.Item>node</ListGroup.Item>
          <ListGroup.Item>bootstrap</ListGroup.Item>
          <ListGroup.Item>jsx</ListGroup.Item>
          <ListGroup.Item>bcrypt</ListGroup.Item>
        </ListGroup>
      </Card>
    </Row>
  );
}