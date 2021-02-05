import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import { Nav } from 'react-bootstrap';

import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Nav defaultActiveKey="/" className="flex-column" style={{maxWidth: "10vw"}}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path='/about'>
            <About/>
          </Route>

          <Route exact path='/skills'>
            <Skills />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
