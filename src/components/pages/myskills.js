import React from 'react';
import { Card, Button } from 'react-bootstrap/';

export default function myskills() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>ParkSmart</Card.Header>
        <Card.Img variant="top" src="./assets/images/parksmart.png" />
        <Card.Body>
          <Button variant="primary" href="https://github.com/Kimberly-Rodriguez/ParkSmart" target="_blank">Github Repo</Button>
          <Button variant="primary" href="https://parksmart2021.herokuapp.com/" target="_blank">Deployed Application</Button>
        </Card.Body>
      </Card>
    </div>
  );
}