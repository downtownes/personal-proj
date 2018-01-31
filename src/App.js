import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main">
          <Nav />
          {routes}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
