import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import P1 from "./components/pages/p1";
import P2 from "./components/pages/p2";
import P3 from "./components/pages/p3";
import P4 from "./components/pages/p4";
import Contact from "./components/pages/Contact";

function App() {
    return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <NavBar />
          <div className="container">
            <Route exact path="/home">
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
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
