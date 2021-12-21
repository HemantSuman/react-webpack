import React from 'react';
// import { ReactComponent as Logo} from './logo.svg';
import Logo from './assets/img/logo.svg';
import Node from './assets/img/node-packages.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" width="100" height="50" src={Node} />
        <img className="App-logo" alt="logo1" width="100" height="50" src={Logo} />
        {/* <Logo className="App-logo" width="25%" /> */}
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
