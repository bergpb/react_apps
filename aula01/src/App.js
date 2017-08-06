import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Contador from './Contador.js';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <div class="App-intro">
          <Contador />
        </div>
      </div>
    );
  }
}

export default App;
