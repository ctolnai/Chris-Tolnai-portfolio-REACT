import React from 'react';
import { Figure } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <h1 style={{paddingBottom:"10px"}}>About Me</h1>
      <Figure>
  <Figure.Image
    width={200}
    height={200}
    alt="chris"
    src="./assets/images/chris.jpeg"
    style={{border:"solid", borderWidth:"1px"}}
  />
  <Figure.Caption style={{fontSize:"20px", paddingTop:"10px", color:"black"}}>
  Full Stack MERN Web Developer with a background in Production Management and a life-long dedication to
learning. Effective at combining creativity and problem solving to develop user-friendly applications.Thoughtful
and analytical leader who strives for consistent organization, process development, and continuous
improvement in all areas of business operations. Excellent problem-solving skills with exceptional attention to
detail. Dedicated researcher and learner who is eager to start new projects and see them through to success.
  </Figure.Caption>
  <div>
  <i class="fab fa-css3-alt fa-2x"></i>
  <i class="fab fa-html5 fa-2x"></i>
  <i class="fab fa-js fa-2x"></i> 
  <i class="fab fa-github fa-2x"></i>
  <i class="fab fa-node fa-2x"></i>
  <i class="fab fa-bootstrap fa-2x"></i>
  <i class="fab fa-npm fa-2x"></i>
  <i class="fab fa-react fa-2xl fa-2x"></i>
  </div>
</Figure>
    
    </div>
  );
}

