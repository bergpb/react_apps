import React from 'react';
import './App.css';
import Contador1 from './time02.js';
import Contador2 from './time01.js';

class App extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row pt-5">
            <table className="table text-center">
            <tr></tr>
              <h3 className="text-center">Placar</h3>
              <tr><td>Time01</td><td></td><td>Time02</td></tr>
              <tr><td>Placar</td><td></td><td>Placar</td></tr>
              <tr><td><Contador1 /></td><td></td><td><Contador2 /></td></tr>
            </table>
          </div>
        </div>
    );
  }
}

export default App;
