import './App.scss';
import Navbar from './components/nav';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      <Main></Main>
      </header>
    </div>
  );
}

export default App;
