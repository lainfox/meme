import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import routes from '../config/routes';
import Upload from '../components/Upload';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <Upload ref="uploadFile" />
        </header>
        {routes}
      </div>
    );
  }
}

export default App
