import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import Nav from './components/NavBar/Nav';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
