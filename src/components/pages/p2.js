import React from 'react';
import { Card, Button } from 'react-bootstrap/';

export default function P2() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Work Day Scheduler</Card.Header>
        <Card.Img variant="top" src="./assets/images/workdayscheduler.png" />
        <Card.Body>
          <Button variant="primary" href="https://github.com/ctolnai/work-day-scheduler" target="_blank">Github Repo</Button>
          <Button variant="primary" href="https://ctolnai.github.io/work-day-scheduler/" target="_blank">Deployed Application</Button>
        </Card.Body>
      </Card>
    </div>
  );
}