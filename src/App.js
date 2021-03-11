import './App.scss';
import Navbar from './components/nav';
import Main from './components/main';
import Education from './components/education';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar></Navbar>
      <Switch>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
      </Switch>
      </Router>
      
      </header>
    </div>
  );
}

export default App;
