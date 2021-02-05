import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/portfolio">Portfolio</Link>

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
  );
}

export default App;
