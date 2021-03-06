import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import P1 from "./components/pages/p1";
import P2 from "./components/pages/p2";
import P3 from "./components/pages/p3";
import P4 from "./components/pages/p4";
import P5 from "./components/pages/p5";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/Contact";
import background from "./styles/background2.png";



function App() {
    return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover',}}>
          <NavBar />
          <div className="container">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/p1">
              <P1/>
            </Route>
            <Route exact path="/p2">
              <P2/>
            </Route>
            <Route exact path="/p3">
              <P3/>
            </Route>
            <Route exact path="/p4">
              <P4/>
            </Route>
            <Route exact path="/p5">
              <P5/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
            <Route exact path="/myskills">
              <Projects/>
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
