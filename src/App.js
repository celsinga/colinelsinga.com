import './App.scss';
import Navbar from './components/nav';
import Main from './components/main';
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
      <div>
      <Navbar></Navbar>
      </div>
      <div>
      <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
      </Switch>
      </div>
      </Router>
      
      </header>
    </div>
  );
}

export default App;
