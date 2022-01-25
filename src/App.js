import React from 'react';
// import { ReactComponent as Logo} from './logo.svg';
import Logo from './assets/img/logo.js';
import Node from './assets/img/node-packages.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" width="100" height="50" src={Node} />
        {/* <img className="App-logo" alt="logo1" width="100" height="50" src={Logo} /> */}
        <Logo className="App-logo" width="25%" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FontAwesomeIcon icon={faCoffee} />
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
