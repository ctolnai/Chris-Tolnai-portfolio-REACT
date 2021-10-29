import React from 'react';
import { Card, Button, Row } from 'react-bootstrap/';

export default function P3() {
  return (
    <Row>
      <Card className="text-center">
        <Card.Header>Note Taker</Card.Header>
        <Card.Img variant="top" src="./assets/images/notetaker.png" />
        <Card.Body>
          <Button variant="primary" href="https://github.com/ctolnai/note-taker" target="_blank">Github Repo</Button>
          <Button variant="primary" href="https://note-taker-ct-2021.herokuapp.com/" target="_blank">Deployed Application</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}