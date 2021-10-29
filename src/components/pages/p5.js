import React from 'react';
import { Card, Button, Row } from 'react-bootstrap/';

export default function P5() {
  return (
    <Row>
      <Card className="text-center">
        <Card.Header>News For You</Card.Header>
        <Card.Img variant="top" src="./assets/images/newsforyou.png" />
        <Card.Body>
          <Button variant="primary" href="https://github.com/ctolnai/newsforyou" target="_blank">Github Repo</Button>
          <Button variant="primary" href="https://blooming-mesa-06853.herokuapp.com/" target="_blank">Deployed Application</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}