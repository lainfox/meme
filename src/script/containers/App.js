import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Hello from './hello';
import routes from '../config/routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!</h1>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default App;
