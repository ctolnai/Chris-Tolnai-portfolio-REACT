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

export default function p4() {
    return (
        <Row xs={1} s={2} md={2}>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Job Search</Card.Header>
                <Card.Img variant="top" src="./assets/images/jobsearch.png" />
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Description</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>This application will help a user to search for job listings based on their skills or interests, and will send a response to the Muse API to then show job listings to the user. Each provided job listing has two corresponding links: one will take the user to the job application on Muse, and the second link gives the user an additional learning resource such as videos that can help the user understand the specific skill(s) that this particular employer may be looking for; additionally, these learning resources can guide the user’s job application process, whether it be updating their resume or learning and strengthening their skillset.</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Role</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>I worked on a team of four for this project.  My responsibilities were to create the page layout using UI Kit, and work on the backend js to fetch information from the two API's.</ListGroup.Item>
                </ListGroup>
            </Card>
             <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Deployment</Card.Header>
                <Button variant="primary" href="https://github.com/kimberly-rodriguez/job-search/" target="_blank">Github Repo</Button>
                <Button variant="primary" href="https://kimberly-rodriguez.github.io/job-search/" target="_blank">Deployed Application</Button>
            </Card>
            <Card style={cardstyle}>
                <Card.Header style={headerstyle}>Technologies</Card.Header>
                <ListGroup style={{ fontSize: "18px" }} variant="flush">
                    <ListGroup.Item>html</ListGroup.Item>
                    <ListGroup.Item>css</ListGroup.Item>
                    <ListGroup.Item>javascript</ListGroup.Item>
                    <ListGroup.Item>jquery</ListGroup.Item>
                    <ListGroup.Item>ui kit</ListGroup.Item>
                    <ListGroup.Item>google fonts</ListGroup.Item>
                </ListGroup>
            </Card>
        </Row>
    );
}