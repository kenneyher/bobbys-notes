import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.username}!</h1>
      <h2>We are going to build a Notes App</h2>
      <h3>We will have 3 collaborators</h3>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello username='Fulano' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
