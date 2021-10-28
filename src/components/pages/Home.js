import React from 'react';
import {Button} from 'react-bootstrap/';

export default function Home() {
  return (
    <div class='text'>
      Hello, I'm 
      <span class="highlight"> Chris Tolnai</span>
      ,
      <br></br>
      and I'm a full-stack web developer.
      <Button className= "button" variant="outline-secondary"><span>Let's Go </span></Button>
    </div>
  );
} 
