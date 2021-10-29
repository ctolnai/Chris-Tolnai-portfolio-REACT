import React from 'react';
import { Card, Button, Row } from 'react-bootstrap/';

export default function P4() {
  return (
    <Row>
      <Card className="text-center">
        <Card.Header>Job Search</Card.Header>
        <Card.Img variant="top" src="./assets/images/jobsearch.png" />
        <Card.Body>
          <Button variant="primary" href="https://github.com/kimberly-rodriguez/job-search/" target="_blank">Github Repo</Button>
          <Button variant="primary" href="https://kimberly-rodriguez.github.io/job-search/" target="_blank">Deployed Application</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}