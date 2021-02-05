import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

import About from "./pages/About"
import Skills from "./pages/Skills"

function App() {
  return (
    <Router>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/about">About</Link>

      <div className="App">
        <Switch>
          <Route exact path="/">
            
          </Route>
          
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/skills'>
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
