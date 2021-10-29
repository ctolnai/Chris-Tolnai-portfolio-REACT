import React from 'react';
import { Row, Col, Card } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

const style ={
height:"175px"
}

export default function Projects() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
      <Link to={"/p1"}>
        <Card>
          <Card.Img style={style} variant="top" src="./assets/images/parksmart.png" />
          <Card.Body>
            <Card.Title>ParkSmart</Card.Title>
          </Card.Body>
        </Card>
        </Link>
        <Link to={"/p2"}>
      <Card>
        <Card.Img style={style} variant="top" src="./assets/images/workdayscheduler.png" />
        <Card.Body>
          <Card.Title>Work Day Scheduler</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </Col>
      <Col>
      <Link to={"/p3"}>
        <Card>
          <Card.Img style={style} variant="top" src="./assets/images/notetaker.png" />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
          </Card.Body>
        </Card>
        </Link>
        <Link to={"/p4"}>
      <Card>
        <Card.Img style={style} variant="top" src="./assets/images/jobsearch.png" />
        <Card.Body>
          <Card.Title>Job Search</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </Col>
      <Col>
      <Link to={"/p5"}>
        <Card>
          <Card.Img style={style} variant="top" src="./assets/images/newsforyou.png" />
          <Card.Body>
            <Card.Title>News For You</Card.Title>
          </Card.Body>
        </Card>
        </Link>
      <Card>
        <Card.Img style={style} variant="top" src="./assets/images/newsforyou.png" />
        <Card.Body>
          <Card.Title>News For You</Card.Title>
        </Card.Body>
      </Card>
      </Col>
    </Row>
  );
}