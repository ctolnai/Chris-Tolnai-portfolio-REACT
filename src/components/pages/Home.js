import React from 'react';
import {Button} from 'react-bootstrap/';

export default function Home() {
  return (
    <div className='main' class='text'>
      Hello, I'm 
      <span class="highlight"> Chris Tolnai</span>
      ,
      <br></br>
      and I'm a full-stack web developer.
      <Button className="button" variant="outline-secondary"><span>Meet Me </span></Button>
    </div>
  );
} 
