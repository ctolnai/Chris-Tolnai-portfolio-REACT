import React from 'react';
import {Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='main' class='text'>
      Hello, I'm 
      <span class="highlight"> Chris Tolnai</span>
      ,
      <br></br>
      and I'm a full-stack web developer.
      <Link className="button" variant="outline-secondary" to={"/about"}><span>Meet Me </span></Link>
    </div>
  );
} 
